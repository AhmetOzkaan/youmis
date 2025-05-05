---
title: 'Forensics Tool ‘Reanimates’ the ‘Brains’ of AIs That Fail to Understand What Went Wrong'
pubDate: 2025-05-03T11:00:00Z
description: 'Explore AI Psychiatry, a novel forensics tool developed at Georgia Tech that recreates failed AI models from memory dumps to diagnose errors and vulnerabilities.'
author: 'Alex Heath'
image: '/blog/ai.jpg'
tags: ['AI', 'forensics']
---

> “From drones delivering medical supplies to digital assistants performing everyday tasks, AI-powered systems are becoming increasingly embedded in everyday life. The creators of these innovations promise transformative benefits. For some people, mainstream applications such as ChatGPT and Claude can seem like magic. But these systems are not magical, nor are they foolproof – they can and do regularly fail to work as intended.”

From drones delivering medical supplies to digital assistants performing everyday tasks, AI-powered systems are becoming increasingly embedded in everyday life. The creators of these innovations promise transformative benefits. For some people, mainstream applications such as ChatGPT and Claude can seem like magic. But these systems are not magical, nor are they foolproof – they can and do regularly fail to work as intended.

AI systems can malfunction due to technical design flaws or biased training data. They can also suffer from vulnerabilities in their code, which can be exploited by malicious hackers. Isolating the cause of an AI failure is imperative for fixing the system.

But AI systems are typically opaque, even to their creators. The challenge is how to investigate AI systems after they fail or fall victim to attack. There are techniques for inspecting AI systems, but they require access to the AI system’s internal data. This access is not guaranteed, especially to forensic investigators called in to determine the cause of a proprietary AI system failure, making investigation impossible.

We are computer scientists who study digital forensics. Our team at the Georgia Institute of Technology has built a system, AI Psychiatry, or AIP, that can recreate the scenario in which an AI failed in order to determine what went wrong. The system addresses the challenges of AI forensics by recovering and “reanimating” a suspect AI model so it can be systematically tested.

### Uncertainty of AI

Imagine a self-driving car veers off the road for no easily discernible reason and then crashes. Logs and sensor data might suggest that a faulty camera caused the AI to misinterpret a road sign as a command to swerve. After a mission-critical failure such as an autonomous vehicle crash, investigators need to determine exactly what caused the error.

Was the crash triggered by a malicious attack on the AI? In this hypothetical case, the camera’s faultiness could be the result of a security vulnerability or bug in its software that was exploited by a hacker. If investigators find such a vulnerability, they have to determine whether that caused the crash. But making that determination is no small feat.

Although there are forensic methods for recovering some evidence from failures of drones, autonomous vehicles and other so-called cyber-physical systems, none can capture the clues required to fully investigate the AI in that system. Advanced AIs can even update their decision-making – and consequently the clues – continuously, making it impossible to investigate the most up-to-date models with existing methods.

Researchers are working on making AI systems more transparent, but unless and until those efforts transform the field, there will be a need for forensics tools to at least understand AI failures.

### Pathology for AI

AI Psychiatry applies a series of forensic algorithms to isolate the data behind the AI system’s decision-making. These pieces are then reassembled into a functional model that performs identically to the original model. Investigators can “reanimate” the AI in a controlled environment and test it with malicious inputs to see whether it exhibits harmful or hidden behaviors.

AI Psychiatry takes in as input a memory image, a snapshot of the bits and bytes loaded when the AI was operational. The memory image at the time of the crash in the autonomous vehicle scenario holds crucial clues about the internal state and decision-making processes of the AI controlling the vehicle. With AI Psychiatry, investigators can now lift the exact AI model from memory, dissect its bits and bytes, and load the model into a secure environment for testing.

Our team tested AI Psychiatry on 30 AI models, 24 of which were intentionally “backdoored” to produce incorrect outcomes under specific triggers. The system was successfully able to recover, rehost and test every model, including models commonly used in real-world scenarios such as street sign recognition in autonomous vehicles.

Thus far, our tests suggest that AI Psychiatry can effectively solve the digital mystery behind a failure such as an autonomous car crash that previously would have left more questions than answers. And if it does not find a vulnerability in the car’s AI system, AI Psychiatry allows investigators to rule out the AI and look for other causes such as a faulty camera.

### Not just for autonomous vehicles

AI Psychiatry’s main algorithm is generic: It focuses on the universal components that all AI models must have to make decisions. This makes our approach readily extendable to any AI models that use popular AI development frameworks. Anyone working to investigate a possible AI failure can use our system to assess a model without prior knowledge of its exact architecture.

Whether the AI is a bot that makes product recommendations or a system that guides autonomous drone fleets, AI Psychiatry can recover and rehost the AI for analysis. AI Psychiatry is entirely open source for any investigator to use.

AI Psychiatry can also serve as a valuable tool for conducting audits on AI systems before problems arise. With government agencies from law enforcement to child protective services integrating AI systems into their workflows, AI audits are becoming an increasingly common oversight requirement at the state level. With a tool like AI Psychiatry in hand, auditors can apply a consistent forensic methodology across diverse AI platforms and deployments.

In the long run, this will pay meaningful dividends both for the creators of AI systems and everyone affected by the tasks they perform.

*This article is based on research originally published in The Conversation.*