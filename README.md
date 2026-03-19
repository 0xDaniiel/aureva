# Aureva

Aureva is an educational skincare platform that helps people understand their skin, discover effective ingredients, and build better skincare routines.

Instead of being an ecommerce store, Aureva focuses on **skincare knowledge, guidance, and routines**. The goal is to make skincare simple, transparent, and science-backed.

---

## Overview

Aureva acts as a **skincare knowledge hub** where users can explore products, learn about ingredients, understand their skin type, and discover effective skincare routines.

The website is designed as a **static frontend application**, meaning it runs entirely on the frontend without a backend or database.

All content is either:

- stored locally as JSON or Markdown
- rendered through static pages
- or fetched from external services when needed

---

## Features

### Product Explorer

Browse skincare products displayed in a clean grid layout.

Each product includes:

- product image
- description
- ingredients
- recommended skin type
- benefits
- instructions for use

Products are stored locally and rendered dynamically.

---

### Skin Type Guide

Learn about the different skin types and how to care for them.

The guide explains:

- Oily skin
- Dry skin
- Combination skin
- Sensitive skin
- Normal skin

Each section includes characteristics, recommended ingredients, and product suggestions.

---

### Skincare Routine Guide

Aureva provides step-by-step skincare routines to help users build effective habits.

**Morning Routine**

1. Cleanser
2. Toner
3. Serum
4. Moisturizer
5. Sunscreen

**Night Routine**

1. Cleanser
2. Treatment
3. Moisturizer

---

### Ingredient Library

Explore common skincare ingredients and understand what they do.

Examples include:

- Hyaluronic Acid — hydration and moisture retention
- Salicylic Acid — acne treatment and pore cleansing
- Niacinamide — oil control and skin barrier support

The ingredient library helps users make informed skincare decisions.

---

### Skin Quiz

An interactive quiz helps users determine their skin type.

Based on answers to questions about skin behavior and reactions, the quiz identifies whether a user likely has:

- dry skin
- oily skin
- combination skin
- sensitive skin
- normal skin

It then recommends appropriate routines and ingredients.

---

### Blog & Skincare Tips

The blog section provides educational articles on skincare topics such as:

- how to build a skincare routine
- best ingredients for acne
- common skincare mistakes
- identifying your skin type

---

### Newsletter

Users can subscribe to receive skincare tips and educational content.

Newsletter forms can be connected to external services like:

- Mailchimp
- ConvertKit
- Beehiiv

---

## Tech Stack

Aureva is built as a **static frontend application** using modern web technologies.

- Next.js
- React
- Tailwind CSS

All pages are statically rendered and optimized for performance.

---

---

## Design Philosophy

Aureva focuses on:

- clean and minimal design
- educational content
- transparency in skincare ingredients
- easy-to-follow skincare guidance

The goal is to make skincare **accessible, understandable, and practical** for everyone.

---

## Concept

Aureva can be thought of as a combination of:

- a skincare encyclopedia
- a routine planner
- an ingredient guide

It helps users make smarter skincare decisions through **education and clarity**.

---

## License

MIT License

---

## Author

# Created by **0xDaniiel**

# Aureva — Science-Based Skincare Education Platform

## What It Does

Aureva is a modern skincare education website that helps people understand their skin and make informed product choices — without the marketing noise. It's not a store; it's a knowledge hub.

## Features

- **Product Library** — Browse science-backed skincare products filtered by category and skin type
- **Product Detail Pages** — Deep dives into each product with ingredients, usage tips, and skin type compatibility
- **Ingredient Encyclopedia** — Searchable database of skincare ingredients with benefits, concerns, and compatibility info
- **Skin Type Quiz** — 5-question interactive quiz that identifies your skin type and gives personalized recommendations
- **Skin Guide** — Comprehensive breakdown of all skin types with characteristics, recommended ingredients, and what to avoid
- **Routine Builder** — Step-by-step skincare routine guidance (AM/PM) tailored to different skin concerns
- **Blog / Articles** — Educational content on skincare science, myths, and best practices
- **About Page** — The mission behind Aureva: education over prescription
- **Contact Page** — Simple way to reach out with questions or feedback

## Why It Was Built

Skincare information online is overwhelming. Between influencer endorsements, contradictory advice, and ingredient fear-mongering, it's hard for anyone to know what actually works for their skin.

Aureva was built to solve that. The idea was simple:

1. **Transparency over marketing** — Every ingredient is explained plainly. No hidden agendas, no product pushing.
2. **Personalization without data harvesting** — The skin quiz runs entirely client-side. No accounts, no tracking, just useful results.
3. **Education as empowerment** — Instead of telling people what to buy, teach them _why_ something works so they can decide for themselves.
4. **Design that builds trust** — A clean, minimal aesthetic inspired by modern skincare brands. The typography (Manrope + Inter), muted palette, and generous whitespace are intentional — skincare content should feel calm, not chaotic.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Framer Motion
- React Router
