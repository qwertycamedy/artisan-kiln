# The Artisan Kiln

Interactive ceramic tile ordering experience built with Next.js, TypeScript, Redux Toolkit and Tailwind CSS.

## Demo

https://artisan-kiln.vercel.app/

---

# Getting Started

## Install dependencies

```bash
npm install
```

## Run development server

```bash
npm run dev
```

## Run tests

```bash
npm run test
```

## Run tests in watch mode

```bash
npm run test:watch
```

---

# Overview

The Artisan Kiln is a responsive ecommerce-style application for configuring and ordering ceramic tiles.

The project includes:

* Shopping cart
* Interactive 6x6 design visualizer
* Checkout flow
* Form validation
* Redux state management
* Drag & drop interactions
* Responsive layout
* Unit and integration tests

---

# Tech Stack

## Core

* Next.js
* TypeScript
* Tailwind CSS
* Redux Toolkit

## Forms & Validation

* React Hook Form
* Zod

## Interactions

* Framer Motion
* dnd-kit

## Testing

* Vitest
* React Testing Library

---

# Features

## Shopping Cart

* Add/remove tiles
* Quantity controls
* Dynamic totals
* Shipping calculation
* Cart highlight interaction from header

## Design Tool

* Interactive 6x6 grid
* Drag & drop tile placement
* Tile palette
* Tile removal

## Checkout

* Multiple payment methods
* Credit card validation
* Responsive form
* Loading states
* Success modal
* Automatic state reset after successful order

## Responsive Design

* Mobile-first layout
* Adaptive typography
* Scroll-safe table behavior
* Flexible panels

---

# Business Logic

## Shipping

* Free shipping for orders above $500
* Otherwise shipping cost is $25

## Totals

Subtotal:

```txt
sum(quantity × unit price)
```

Grand Total:

```txt
subtotal + shipping
```

---

# Project Structure

```txt
src/
├── app/
├── components/
│   ├── cart/
│   ├── checkout/
│   ├── design-tool/
│   ├── layout/
│   └── ui/
├── data/
├── lib/
├── store/
│   └── features/
├── test/
├── tests/
│   ├── integration/
│   └── unit/
└── types/
```

---

# Testing

The project includes:

## Unit Tests

* Redux reducers
* Selectors
* Validation schema
* Grid logic

## Integration Tests

* Cart interactions
* Checkout validation
* Payment switching
* Modal behavior

---

# Notes

This project was created as a frontend technical assessment focused on:

* Component architecture
* State management
* Responsive UI
* UX interactions
* Typed validation
* Frontend testing
* Maintainable code structure
