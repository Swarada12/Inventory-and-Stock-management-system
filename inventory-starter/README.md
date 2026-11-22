# StockNest — FY Inventory & Stock Management Starter

This is a deliberately **partially completed (~55% teaching starter)** frontend project. It is **not** a complete solution.

## Run
Open `index.html` in a browser, preferably using VS Code Live Server. No packages, backend, or database needed.

## Working starter features
- Responsive sidebar and six page layouts
- Product listing with status labels
- Add-product form with basic validation
- Add-category form
- Live product search, category filter, and stock-status filter
- Dashboard: product count, unit count, inventory value
- Browser localStorage persistence for working features

## Student tasks (must implement)
1. **Dashboard:** Low-stock counts and alert list.
2. **Products/Categories:** Edit and delete products, safely delete unused categories.
3. **Stock/Transactions:** Stock in/out validation, update quantity, record and display transaction history.
4. **Reports:** Category totals, visual chart, extra metrics.

## Suggested Git branches
- `feature/dashboard-alerts`
- `feature/product-crud`
- `feature/stock-history`
- `feature/reports`

## Acceptance tests
- Add a product, refresh, and confirm it remains.
- Edit a product and confirm dashboard and table update.
- Delete a product only after confirmation.
- Stock Out cannot remove more units than available.
- Stock In/Out must update quantity and record a timestamped transaction.
- Low-stock/out-of-stock alerts must update after every stock change.
- Search and filters must still work after edits.
- Reports must reflect current inventory and empty states.
- Test on mobile and desktop.

## Important notes
- localStorage is per browser/device, not a shared multi-user database.
- The example uses local time through `new Date()` when students add transaction logging.
- Product IDs are starter-only; students can improve the ID generator.
- All students should commit their own work, open pull requests, and review each other's changes.
