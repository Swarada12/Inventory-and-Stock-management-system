// STUDENT TODO FILE: Implement the missing modules below.
// You may add helper functions, but avoid duplicating event listeners.

// STUDENT 1: Dashboard
// - Calculate low-stock count (quantity > 0 && quantity <= minimum).
// - Show a low-stock list in #alerts, plus out-of-stock products.
// - Call renderDashboard() whenever quantities change.

// STUDENT 2: Product Management
// - Replace Edit/Delete placeholder handlers in app.js.
// - Edit should populate the form with existing values and update the record.
// - Delete should ask for confirmation and handle transaction history safely.
// - Add category deletion; prevent deleting a category in use.

// STUDENT 3: Stock Operations and History
$('stock-form').addEventListener('submit',event=>{
  event.preventDefault();
  const productId=$('stock-product').value;
  const operation=$('stock-type').value;
  const quantity=Number($('stock-qty').value);
  const note=$('stock-note').value.trim();
  // TODO: find product; validate positive integer quantity.
  // TODO: for stock out, reject quantity > available stock.
  // TODO: update product.quantity.
  // TODO: append transaction {id,date,productId,productName,type,quantity,remaining,note}.
  // TODO: saveData(), renderAll(), renderHistory(), reset form, notify user.
  notify('TODO: implement stock updates');
});
function renderHistory(){
  // TODO: render store.transactions in #history-rows, newest first.
  // Hint: use safe() for text supplied by users.
}

// STUDENT 4: Reports
function renderReports(){
  // TODO: aggregate stock quantities by category.
  // TODO: show category totals as accessible HTML/CSS bars in #report-chart.
  // Optional: add stock value per category and status counts.
}
