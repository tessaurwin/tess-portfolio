---
title: "Wearable Temperature Sensor for Paralyzed Veterans"
date: 2024-04-30
summary: "Wearable temperature-sensing device for real-time monitoring; led electronics + embedded systems work."
heroImage: "images/projects/capstone/capstone-award-stage.jpeg"
tags: ["Embedded", "Sensors", "KiCAD", "PCB", "Firmware"]
gallery:
  - src: "images/projects/capstone/capstone-award-stage.jpeg"
    alt: "Senior Design Capstone Project Award Ceremony"
  - src: "images/projects/capstone/capstone-presentation-closeup.jpeg"
    alt: "Presenting the Project"
  - src: "images/projects/capstone/capstone-tabling-zoomedback.jpeg"
    alt: "Senior Design Showcase"
docs:
  - label: "Report (PDF)"
    href: "docs/projects/capstone/capstone-final-report.pdf"
---

# Overview

This senior capstone project focused on designing a **lightweight wearable temperature sensing device** for individuals with paralysis, where sensing temperature extremes can be difficult or impossible.

The wearable continuously monitors skin temperature and transmits real-time data over **Bluetooth Low Energy (BLE)** to a smartphone application for visualization and safety alerts. The project was sponsored by **BAE Systems** in collaboration with **Adaptive Adventures**.

## My Role

I owned the **wearable hardware design end-to-end**.

This included:
- temperature sensor selection and validation  
- microcontroller and BLE integration  
- power system design and battery selection  
- wiring, packaging, and enclosure iteration  
- hardware testing and performance evaluation  

I did not implement the mobile application, but worked closely with the software team to define the BLE interface and ensure reliable data transmission from the device.

## System Architecture (Hardware)

The wearable follows a simple but robust architecture:

- **Temperature sensor** in direct skin contact  
- **Arduino Nano 33 BLE** for sensing, processing, and wireless communication  
- **Bluetooth Low Energy (BLE)** peripheral → smartphone (central device)  
- **3.7V LiPo battery** for day-long operation  
- Custom **3D-printed enclosure** designed for comfort and stability  

The device operates as a BLE peripheral exposing a temperature characteristic with read and notify capabilities.

## Hardware Design Decisions

### Temperature Sensor Selection
Multiple sensors were evaluated using structured test methods including:
- ice bath testing (~0 °C)
- boiling water testing (~100 °C)
- reference thermometer comparison
- response time measurement

Based on accuracy, cost, and reliability, the **LM35DZ** sensor was selected for initial prototyping, with higher-precision variants evaluated later.

### Power System
A **3.7V lithium-polymer (LiPo) battery** was selected to balance:
- energy density  
- safety  
- wearability  
- day-long operation  

Transmission intervals were optimized to reduce power draw without sacrificing responsiveness.

### Enclosure & Wearability
The enclosure and strap were iterated multiple times to:
- maintain stable skin contact  
- improve comfort during extended wear  
- protect electronics from moisture and impact  

The final housing was **3D-printed in PETG** for durability and improved surface finish.

## Validation & Testing

Hardware validation included:
- sensor accuracy testing across temperature extremes  
- response time characterization  
- BLE reliability and connection testing  
- integration testing with the mobile application  

All testing was conducted under controlled conditions and documented in the final report.

## Why It Matters

This project forced me to think like a real hardware engineer building a wearable system:

**sensor physics → embedded firmware → wireless communication → power → packaging → user comfort**

The result is a practical, safety-oriented wearable platform designed for real users and real constraints — not just a lab demo.

## Documentation

- **Final Report (PDF)**  
- **Capstone Presentation (PDF)**

## Context

- **Course:** EE 464 – Senior Design  
- **Institution:** University of Texas at Austin  
- **Sponsor:** BAE Systems & Adaptive Adventures  
- **Year:** 2023–2024  
