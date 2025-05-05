#!/bin/bash

# Herhangi bir komut başarısız olursa script'i durdurur.
set -e

# --- Configuration ---
REMOTE_USER="youmis"                     # Sunucuya SSH ile bağlandığınız kullanıcı adı (örn: root, ubuntu, deployer)
REMOTE_HOST="212.68.34.126"        # Sunucunuzun IP adresi veya alan adı
REMOTE_PROJECT_PATH="~/deployment" # Sunucudaki projenizin KÖK DİZİNİ (dist klasörünün İÇERİĞİNİN kopyalanacağı yer)
LOCAL_DIST_PATH="./dist"                 # Yerel makinenizdeki build çıktısı klasörü (genellikle './dist')
NODE_PROCESS_NAME_OR_ID="youmis" # PM2 kullanıyorsanız uygulamanızın adı veya ID'si, Systemd kullanıyorsanız servis adı (.service uzantısız)
# --- End Configuration ---

echo "🚀 Dağıtım başlıyor..."

# 1. Astro projesini build et
echo "📦 Astro projesi build ediliyor..."
# Kullandığınız paket yöneticisine göre komutu seçin:
bun run --bun build
# yarn build
# pnpm build

# Build başarılı oldu mu kontrol et (dist klasörü var mı?)
if [ ! -d "$LOCAL_DIST_PATH" ]; then
  echo "❌ Build başarısız: '$LOCAL_DIST_PATH' klasörü bulunamadı."
  exit 1
fi
echo "✅ Build başarılı."

# 2. 'dist' klasörünün içeriğini rsync ile sunucuya kopyala
#    -a: arşiv modu (izinleri, sahiplikleri, zaman damgalarını vb. korur)
#    -v: ayrıntılı çıktı gösterir
#    -z: transfer sırasında veriyi sıkıştırır
#    --delete: hedefte olup kaynakta olmayan dosyaları siler (eski build artıklarını temizlemek için önemlidir)
#    Not: LOCAL_DIST_PATH sonundaki / önemlidir, klasörün İÇERİĞİNİ kopyalar.
echo "☁️ Dosyalar rsync ile sunucuya gönderiliyor..."
rsync -avz --delete "${LOCAL_DIST_PATH}/" "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PROJECT_PATH}/dist/"
rsync -avz "./run_build.ts" "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PROJECT_PATH}/"
echo "✅ Dosyalar başarıyla senkronize edildi."

# 3. Sunucudaki Node.js sunucusunu yeniden başlat
echo "🔄 Uzak sunucudaki Node.js sunucusu yeniden başlatılıyor..."

# --- Aşağıdaki yeniden başlatma komutlarından SADECE BİRİNİ seçin ve diğerlerini yorum satırı yapın (# ile) ---

# Seçenek A: PM2 Kullanımı (Tavsiye Edilen) - NODE_PROCESS_NAME_OR_ID'yi doğru ayarladığınızdan emin olun
ssh "${REMOTE_USER}@${REMOTE_HOST}" "pm2 reload ${NODE_PROCESS_NAME_OR_ID} || pm2 restart ${NODE_PROCESS_NAME_OR_ID}"
# 'reload' komutu önce sıfır kesinti süreli yeniden yüklemeyi dener, başarısız olursa 'restart' yapar.

# Seçenek B: Systemd Kullanımı - NODE_PROCESS_NAME_OR_ID'yi servis adıyla değiştirin (örn: benim-app.service ise 'benim-app' yazın)
# ssh "${REMOTE_USER}@${REMOTE_HOST}" "sudo systemctl restart ${NODE_PROCESS_NAME_OR_ID}.service"
# Dikkat: Bu komut için SSH kullanıcısının ilgili servis için parolasız sudo yetkisi olması gerekebilir.

# Seçenek C: Manuel Node Süreci (Daha Az Güvenilir) - Komutları kendi yapınıza göre uyarlayın
# ssh "${REMOTE_USER}@${REMOTE_HOST}" "pkill -f 'node server.js' && cd ${REMOTE_PROJECT_PATH} && nohup node server.js > app.log 2>&1 &"
# Uyarı: Bu yöntem kırılgan olabilir. PM2 veya systemd gibi bir süreç yöneticisi kullanmanız önerilir.

# --- Yeniden başlatma komut seçeneklerinin sonu ---

echo "✅ Node.js sunucusu yeniden başlatma komutu gönderildi."

# İsteğe bağlı: Sunucu durumunu kontrol etmek için bir komut ekleyebilirsiniz
echo "🔍 Sunucu durumu kontrol ediliyor..."
ssh "${REMOTE_USER}@${REMOTE_HOST}" "pm2 list" # Veya systemctl status <servis_adi>

echo "🎉 Dağıtım başarıyla tamamlandı!"

exit 0