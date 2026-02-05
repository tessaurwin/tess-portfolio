---
title: "Capacitive Touch Harp - Embedded Systems Project"
slug: "capacitive-touch-harp"
date: 2023-12-01
summary: "A full embedded systems project featuring a capacitive-touch electric harp with custom firmware, PCB design, and real-time audio synthesis."
tags: ["Embedded Systems", "Firmware", "PCB Design", "C", "TM4C", "Sensors", "Audio"]
featured: true

github: "https://github.com/tessaurwin/capacitive-touch-harp/tree/main" 

heroImage: "images/projects/cap-harp/445L-showcase.png"
gallery:
  - src: "images/projects/cap-harp/pcb-zoomed.png"
    alt: "Close View of Custom PCB"
  - src: "images/projects/cap-harp/lab-work-session.png"
    alt: "Lab Work Session"
  - src: "images/projects/cap-harp/harp-work.png"
    alt: "Working Individually"
  - src: "images/projects/cap-harp/pcb-wide.png"
    alt: "Custom PCB"

docs:
  - label: "Final Project Report (PDF)"
    href: "docs/projects/cap-harp/final-report.pdf"

repo: "https://github.com/tessaurwin/capacitive-touch-harp/tree/main"
---

# Overview

This project was a full embedded systems capstone-style build completed for ECE 445L Embedded Systems Design Lab at UT Austin in Fall 2023.

The result was a **capacitive-touch electric harp** with 12 strings, real-time audio synthesis, LED feedback, multiple play modes, and a custom PCB, all housed in a **3D-printed frame over 3 feet tall**. The project culminated in a public end-of-semester showcase and competition-style demo.

Unlike a purely software project, this system required integration of **firmware, hardware, sensors, and real-time constraints**.

---

# My Role & Contributions

While this was a team project, my work focused heavily on the **embedded firmware and hardware side**, including:

- Writing and integrating **core firmware in C**
- Implementing **capacitive touch sensing** using the MPR121
- Writing **I²C drivers and sensor interfaces**
- Developing **audio synthesis and playback logic**
- Designing and debugging the **custom PCB**
- System integration and real-time debugging

I did **not** work on the mobile/app interface portion of the project.

---

# System Architecture

The harp system was composed of multiple interacting subsystems:

- **Inputs**
  - Capacitive touch strings (MPR121)
  - Infrared distance sensors (for octave selection)
  - Physical switches and controls

- **Outputs**
  - Real-time audio via DAC + amplifier
  - LED string illumination
  - LCD display for modes and feedback

- **Controllers**
  - Dual TM4C microcontrollers communicating via UART

---

# Touch Sensing & Controls

Each string uses **capacitive touch sensing** to detect when it is played. I implemented the full MPR121 interface over I²C, including:

- Device initialization and configuration
- Per-electrode threshold tuning
- Touch detection and debouncing
- Event-based detection of new touches vs. releases

Touch input is mapped directly to musical notes with minimal latency.

---

# Audio Generation

Audio is generated **digitally in real time** on the microcontroller:

- Precomputed waveform lookup tables (sine, guitar-like tones)
- DAC output driven via timer interrupts
- Adjustable frequency, octave, and amplitude
- Support for multiple tones and play modes

Care was taken to meet **real-time timing constraints** so that note playback felt instantaneous and responsive.

---

# Distance Sensing for Octave Selection

Each string is paired with an **infrared distance sensor** that determines where along the string the user is touching:

- Lower position → lower octave  
- Higher position → higher octave  

This allows each string to represent **multiple octaves**, dramatically increasing musical range without adding more strings.

---

# Hardware & PCB Design

The system was built around a **custom two-layer PCB**, which I helped design, debug, and bring up. The board integrates:

- TM4C microcontrollers
- DAC and audio amplifier
- Touch and distance sensor interfaces
- Power regulation and signal routing

All electronics were mounted cleanly inside the 3D-printed harp base.

---

# Build & Showcase

- 3D-printed multi-section harp frame (~3 ft tall)
- Fully self-contained embedded system
- Live demo at final project showcase
- Met all lab constraints for inputs, outputs, ISRs, and system complexity

The project was designed to be both **technically rigorous** and **fun to interact with**, and it consistently worked in live demo conditions.

---

# Tools & Technologies

- **Languages:** C  
- **MCUs:** TM4C (Tiva C Series)  
- **Interfaces:** I²C, UART, ADC, DAC  
- **Sensors:** MPR121 capacitive touch, IR distance sensors  
- **Hardware:** Custom PCB, external DAC, audio amplifier  
- **Debugging:** Oscilloscope, logic analyzer, Keil debugger  

---

# Context

**Course:** ECE 445L – Embedded Systems Design Lab  
**Institution:** The University of Texas at Austin  
**Term:** Fall 2023  
**Project Type:** Team-based final project with live demo  

---

# Takeaways

This project strengthened my ability to:

- Write **low-level firmware** that interacts directly with hardware  
- Design and debug **real embedded systems**, not just simulations  
- Manage **real-time constraints** across multiple subsystems  
- Integrate sensors, audio, and control logic into a cohesive system  

It was one of my first experiences building something that felt like a **real consumer device**, end-to-end.
