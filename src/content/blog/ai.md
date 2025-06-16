---
title: 'Adli Bilişim Aracı, Ne Olduğunu Anlayamayan Yapay Zekaların ''Beyinlerini'' Yeniden Canlandırıyor'
pubDate: 2025-05-03T11:00:00Z
description: 'Georgia Tech''te geliştirilen ve başarısız yapay zeka modellerini bellek dökümlerinden yeniden yaratarak hataları ve güvenlik açıklarını teşhis eden yeni bir adli bilişim aracı olan AI Psychiatry''yi keşfedin.'
author: 'Alex Heath'
image: '/blog/ai.jpg'
tags: ['Yapay Zeka', 'Adli Bilişim']
---

> “Tıbbi malzeme taşıyan dronlardan günlük görevleri yerine getiren dijital asistanlara kadar, yapay zeka destekli sistemler günlük hayata giderek daha fazla entegre oluyor. Bu yeniliklerin yaratıcıları dönüştürücü faydalar vaat ediyor. Bazı insanlar için ChatGPT ve Claude gibi ana akım uygulamalar sihir gibi görünebilir. Ancak bu sistemler sihirli değildir ve kusursuz da değillerdir – amaçlandığı gibi çalışmayabilirler ve düzenli olarak çalışmazlar.”

Tıbbi malzeme taşıyan dronlardan günlük görevleri yerine getiren dijital asistanlara kadar, yapay zeka destekli sistemler günlük hayata giderek daha fazla entegre oluyor. Bu yeniliklerin yaratıcıları dönüştürücü faydalar vaat ediyor. Bazı insanlar için ChatGPT ve Claude gibi ana akım uygulamalar sihir gibi görünebilir. Ancak bu sistemler sihirli değildir ve kusursuz da değillerdir – amaçlandığı gibi çalışmayabilirler ve düzenli olarak çalışmazlar.

Yapay zeka sistemleri, teknik tasarım kusurları veya yanlı eğitim verileri nedeniyle arızalanabilir. Ayrıca, kötü niyetli bilgisayar korsanları tarafından istismar edilebilecek kodlarındaki güvenlik açıklarından da muzdarip olabilirler. Bir yapay zeka arızasının nedenini belirlemek, sistemi düzeltmek için zorunludur.

Ancak yapay zeka sistemleri, yaratıcıları için bile genellikle opaktır. Zorluk, yapay zeka sistemlerinin başarısız olduktan veya saldırıya uğradıktan sonra nasıl araştırılacağıdır. Yapay zeka sistemlerini incelemek için teknikler vardır, ancak bunlar yapay zeka sisteminin dahili verilerine erişim gerektirir. Bu erişim garanti edilmez, özellikle de tescilli bir yapay zeka sistemi arızasının nedenini belirlemek için çağrılan adli araştırmacılara, bu da soruşturmayı imkansız hale getirir.

Biz dijital adli bilişim üzerine çalışan bilgisayar bilimcileriyiz. Georgia Teknoloji Enstitüsü'ndeki ekibimiz, neyin yanlış gittiğini belirlemek için bir yapay zekanın başarısız olduğu senaryoyu yeniden yaratabilen bir sistem olan AI Psychiatry veya AIP'yi geliştirdi. Sistem, şüpheli bir yapay zeka modelini kurtarıp "yeniden canlandırarak" sistematik olarak test edilebilmesi için yapay zeka adli bilişiminin zorluklarını ele alıyor.

### Yapay Zekanın Belirsizliği

Kendi kendine giden bir arabanın görünürde bir neden olmaksızın yoldan çıktığını ve ardından kaza yaptığını hayal edin. Günlükler ve sensör verileri, hatalı bir kameranın yapay zekanın bir yol işaretini yanlış yorumlayarak savrulma komutu vermesine neden olduğunu düşündürebilir. Otonom bir araç kazası gibi görev açısından kritik bir arızadan sonra, araştırmacıların hataya tam olarak neyin neden olduğunu belirlemesi gerekir.

Kaza, yapay zekaya yönelik kötü niyetli bir saldırı tarafından mı tetiklendi? Bu varsayımsal durumda, kameranın arızası, bir bilgisayar korsanı tarafından istismar edilen yazılımındaki bir güvenlik açığı veya hatanın sonucu olabilir. Araştırmacılar böyle bir güvenlik açığı bulursa, kazaya bunun neden olup olmadığını belirlemeleri gerekir. Ancak bu belirlemeyi yapmak kolay bir iş değildir.

Dronların, otonom araçların ve diğer sözde siber-fiziksel sistemlerin arızalarından bazı kanıtları kurtarmak için adli yöntemler olmasına rağmen, hiçbiri bu sistemdeki yapay zekayı tam olarak araştırmak için gereken ipuçlarını yakalayamaz. Gelişmiş yapay zekalar karar verme süreçlerini – ve dolayısıyla ipuçlarını – sürekli olarak güncelleyebilir, bu da mevcut yöntemlerle en güncel modelleri araştırmayı imkansız hale getirir.

Araştırmacılar yapay zeka sistemlerini daha şeffaf hale getirmek için çalışıyorlar, ancak bu çabalar alanı dönüştürene kadar, en azından yapay zeka arızalarını anlamak için adli bilişim araçlarına ihtiyaç duyulacaktır.

### Yapay Zeka için Patoloji

AI Psychiatry, yapay zeka sisteminin karar verme sürecinin arkasındaki verileri izole etmek için bir dizi adli algoritma uygular. Bu parçalar daha sonra orijinal modelle aynı şekilde çalışan işlevsel bir modelde yeniden birleştirilir. Araştırmacılar, yapay zekayı kontrollü bir ortamda "yeniden canlandırabilir" ve zararlı veya gizli davranışlar sergileyip sergilemediğini görmek için kötü niyetli girdilerle test edebilirler.

AI Psychiatry, girdi olarak bir bellek görüntüsü, yani yapay zeka çalışır durumdayken yüklenen bit ve baytların anlık görüntüsünü alır. Otonom araç senaryosundaki kaza anındaki bellek görüntüsü, aracı kontrol eden yapay zekanın iç durumu ve karar verme süreçleri hakkında önemli ipuçları içerir. AI Psychiatry ile araştırmacılar artık tam yapay zeka modelini bellekten alabilir, bitlerini ve baytlarını inceleyebilir ve modeli test için güvenli bir ortama yükleyebilir.

Ekibimiz AI Psychiatry'yi 30 yapay zeka modeli üzerinde test etti; bunların 24'ü belirli tetikleyiciler altında yanlış sonuçlar üretmek üzere kasıtlı olarak "arka kapılıydı". Sistem, otonom araçlarda trafik işareti tanıma gibi gerçek dünya senaryolarında yaygın olarak kullanılan modeller de dahil olmak üzere her modeli başarıyla kurtarabildi, yeniden barındırabildi ve test edebildi.

Şimdiye kadar, testlerimiz AI Psychiatry'nin daha önce yanıtlardan çok soru bırakacak otonom bir araba kazası gibi bir arızanın ardındaki dijital gizemi etkili bir şekilde çözebileceğini gösteriyor. Ve arabanın yapay zeka sisteminde bir güvenlik açığı bulamazsa, AI Psychiatry araştırmacıların yapay zekayı dışlamasına ve hatalı bir kamera gibi diğer nedenleri aramasına olanak tanır.

### Sadece otonom araçlar için değil

AI Psychiatry'nin ana algoritması geneldir: tüm yapay zeka modellerinin karar vermek için sahip olması gereken evrensel bileşenlere odaklanır. Bu, yaklaşımımızı popüler yapay zeka geliştirme çerçevelerini kullanan herhangi bir yapay zeka modeline kolayca genişletilebilir hale getirir. Olası bir yapay zeka arızasını araştırmak için çalışan herkes, sistemimizi tam mimarisi hakkında önceden bilgi sahibi olmadan bir modeli değerlendirmek için kullanabilir.

Yapay zeka ister ürün önerileri yapan bir bot ister otonom drone filolarını yönlendiren bir sistem olsun, AI Psychiatry analiz için yapay zekayı kurtarabilir ve yeniden barındırabilir. AI Psychiatry, herhangi bir araştırmacının kullanması için tamamen açık kaynaklıdır.

AI Psychiatry, sorunlar ortaya çıkmadan önce yapay zeka sistemleri üzerinde denetimler yapmak için de değerli bir araç olarak hizmet edebilir. Kolluk kuvvetlerinden çocuk koruma hizmetlerine kadar devlet kurumlarının yapay zeka sistemlerini iş akışlarına entegre etmesiyle, yapay zeka denetimleri eyalet düzeyinde giderek daha yaygın bir gözetim gereksinimi haline geliyor. AI Psychiatry gibi bir araçla denetçiler, çeşitli yapay zeka platformları ve dağıtımlarında tutarlı bir adli metodoloji uygulayabilirler.

Uzun vadede bu, hem yapay zeka sistemlerinin yaratıcıları hem de gerçekleştirdikleri görevlerden etkilenen herkes için anlamlı faydalar sağlayacaktır.

*Bu makale ilk olarak The Conversation'da yayınlanan araştırmaya dayanmaktadır.*