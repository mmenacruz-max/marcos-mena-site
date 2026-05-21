---
title: Fast Growing Accounts Agent
description: "AI agent and Redshift dashboard that surface organically growing accounts hidden in 22,000+ unmanaged SMB accounts in Canada."
summary: Scans 22,000+ unmanaged accounts with custom logic on order history to separate organic growth from seasonality and spot buys.
tags: ["Claude", "SQL", "Redshift", "Prospecting"]
outcome: "$560K in opportunities surfaced across 10 accounts growing 240% YoY"
order: 1
---

## Results

- 10 high-growth accounts surfaced at **240% YoY** that the team had no prior visibility into
- **$560K** in opportunity value identified from that cohort alone
- Integrated into weekly territory planning and outbound prioritization across SMB Canada
- Part of broader AI agent program driving **$1.4M+** in pipeline

## The problem

Amazon Business SMB Canada manages roughly **25,000 accounts** across the country. Each Account Executive owns about **1,000**, which leaves **~22,000 unmanaged accounts** with little to no oversight. Some of those quietly grow **200%+ year over year**. Without a way to systematically scan them, those organic wins get missed.

The challenge isn't just volume. Spend data is noisy: seasonality, one-time spot buys over **$5,000**, and contract shifts all look like growth if you don't account for them.

## What I built

A production AI agent shipped on **Orcha** (Amazon's internal agent platform running Claude), paired with a custom **Redshift dashboard** that refreshes daily.

The agent and dashboard work together:

- The dashboard pulls every order placed across the 22,000+ unmanaged accounts in Canada and exposes the full order history in one view
- The agent applies custom logic to strip out seasonality and spot buys ($5,000+ purchases that inflate apparent growth) and isolates organic growth signals
- Output ranks accounts by growth velocity, presented in both manager and AE views so the team can decide which accounts deserve to be promoted to managed status

Built end-to-end in about **two weeks**. It was easier than the Health of Business agent because the SQL foundation was already in place.

## Why this matters

Before this agent, scanning 22,000 unmanaged accounts wasn't possible. The only alternative was account-by-account manual review, which doesn't scale. The agent makes work happen that simply could not happen before, and that translates directly to pipeline that would otherwise stay invisible.

## Tech & tools

Orcha · Claude · SQL · Amazon Redshift · Custom dashboard pipeline

## What I learned

The highest-value AI in sales isn't generic outreach. It's **account intelligence at scale**. Filtering signal from noise in spend data changed how my team prioritizes, and the same pattern applies to any large unmanaged book.
