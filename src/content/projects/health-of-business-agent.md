---
title: Health of Business Agent
description: "AI agent and Redshift dashboard that score 1,000 managed accounts quarter-over-quarter on spend health, surface churn risk, and generate ready-to-send outreach."
summary: Compares quarter-over-quarter spend, order count, and basket size to identify growing, shrinking, and at-risk accounts, then tells you why and what to do about each one.
tags: ["Claude", "SQL", "Redshift", "Dashboarding"]
outcome: "$270K pipeline + $600K enterprise opportunities; adopted by AEs across NA and LATAM"
order: 2
---

## Results

- **20 meetings booked** (6.7% conversion) from 300 outreach emails
- **$270K** in pipeline from the pilot cohort
- **2 enterprise opportunities** at ~$300K each (**$600K** additional)
- Rolled out to AEs across **North America and LATAM** after a training session organized by the Head of SMB
- Part of broader program driving **$1.4M+** in pipeline

## The problem

Amazon Business SMB Canada didn't have a Health of Business dashboard that worked for our segment. Internal GTM resources prioritized enterprise, so SMB AEs were stuck reviewing accounts one by one to spot trouble. That meant we mostly didn't, until a customer was already gone.

I have **1,000 accounts** in my territory, growing **45% year over year**. Manual review isn't a strategy.

## What I built

A production AI agent shipped on **Orcha** (Amazon's internal agent platform running Claude), backed by a **Redshift dashboard** I taught myself SQL to write. The whole thing runs on a **daily refresh**.

For each of the 1,000 managed accounts, the agent compares this year's quarter vs. the same quarter last year across:

- Total spend
- Number of orders
- Average basket size
- Adjustments for inflated spot buys ($5,000+ one-time purchases that distort trends)

The output tells the AE: which accounts are growing, which are shrinking, why they're shrinking, and specific action items, including outreach emails ready to send.

Took about **a month** end to end. The longest part was teaching myself SQL.

## How it scaled beyond Canada

The Head of SMB saw the impact and organized a training session for AEs in other regions. Adoption since has been very high across the **North America and LATAM** teams. The Canada SMB segment didn't get GTM resources to build this, so we built it, and now it powers the segment globally.

## Why this matters

The previous alternative wasn't a slower tool. It was **no tool**. Scoring 1,000 accounts on health each day with specific action items literally was not possible before. That changes what an AE is able to focus on each week.

## Tech & tools

Orcha · Claude · SQL · Amazon Redshift · Email automation · Shared dashboards

## What I learned

When an AE-built tool gets adopted by peers in other regions, it's because it **reduces cognitive load**, not because it's clever. The agent's SQL and scoring had to be explainable, auditable, and good enough to stake outreach on.
