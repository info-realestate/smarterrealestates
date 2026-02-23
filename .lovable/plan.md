

## Add Google Ads Conversion Tracking on Form Submission

The conversion snippet should fire when a user successfully submits the contact form, not on every page load. Placing it in the `<head>` would track every visitor as a conversion, which would be inaccurate.

### What will change

**File: `src/components/ContactForm.tsx`**
- After a successful form submission (line 51, where `setIsSubmitted(true)` is called), add a call to `gtag('event', 'conversion', ...)` to fire the Google Ads conversion event.
- This uses the existing `gtag` function already loaded globally via the Google tag in `index.html`.
- A TypeScript declaration for the global `gtag` function will be added to avoid type errors.

### Technical details

The conversion call will be:
```typescript
// Fire Google Ads conversion event
window.gtag?.('event', 'conversion', {
  send_to: 'AW-17816164600/lZZUCLnb1f0bEPixtK9C',
  value: 1.0,
  currency: 'USD',
});
```

This will be inserted right after `setIsSubmitted(true)` on line 51, so it only fires on successful form submissions -- exactly what you want for tracking real consultation requests as conversions in Google Ads.

