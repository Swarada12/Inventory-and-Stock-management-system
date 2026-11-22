// Working starter features: navigation, product display, product creation,
// category creation, search/filter, and basic dashboard totals.
const $=id=>document.getElementById(id);
const titles={dashboard:['Dashboard','Overview of your inventory'],products:['Products','Manage all inventory products'],categories:['Categories','Organize your products'],stock:['Stock Operations','Add or remove stock'],history:['Transactions','Stock movement history'],reports:['Reports','Inventory insights']};
function notify(message){const el=$('toast');el.textContent=message;el.style.display='block';}
function safe(text){return String(text).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
function status(p){return p.quantity===0?'out':p.quantity<=p.minimum?'low':'in';}
function populateSelect(id,values,placeholder){const select=$(id);const current=select.value;select.innerHTML=(placeholder?`<option value="">${safe(placeholder)}</option>`:'')+values.map(x=>`<option value="${safe(x)}">${safe(x)}</option>`).join('');if(values.includes(current))select.value=current;}
function renderCategories(){populateSelect('category',store.categories,'Choose category');const filter=$('filter-category'),old=filter.value;filter.innerHTML='<option value="all">All categories</option>'+store.categories.map(c=>`<option value="${safe(c)}">${safe(c)}</option>`).join('');if(store.categories.includes(old))filter.value=old;$('category-list').innerHTML=store.categories.map(c=>`<li>${safe(c)}</li>`).join('');}
function renderProducts(){const term=$('search').value.trim().toLowerCase(),cat=$('filter-category').value,stat=$('filter-status').value;const rows=store.products.filter(p=>p.name.toLowerCase().includes(term)&&(cat==='all'||p.category===cat)&&(stat==='all'||status(p)===stat));$('product-rows').innerHTML=rows.map(p=>`<tr><td>${safe(p.id)}</td><td>${safe(p.name)}</td><td>${safe(p.category)}</td><td>₹${p.price.toFixed(2)}</td><td>${p.quantity}</td><td>${p.minimum}</td><td><span class="status ${status(p)}">${{in:'In stock',low:'Low stock',out:'Out of stock'}[status(p)]}</span></td><td><button data-edit="${safe(p.id)}">Edit</button><button data-delete="${safe(p.id)}">Delete</button></td></tr>`).join('')||'<tr><td colspan="8">No matching products</td></tr>';}
function renderDashboard(){
 $('stat-products').textContent=store.products.length;
 $('stat-units').textContent=store.products.reduce((n,p)=>n+p.quantity,0);
 $('stat-value').textContent='₹'+store.products.reduce((n,p)=>n+p.quantity*p.price,0).toLocaleString('en-IN');
 // TODO Student 1: calculate low-stock count and show alert list.
 $('stat-low').textContent='—';
}
function renderStockOptions(){const s=$('stock-product'),old=s.value;s.innerHTML=store.products.map(p=>`<option value="${safe(p.id)}">${safe(p.name)} (${safe(p.id)})</option>`).join('');if(store.products.some(p=>p.id===old))s.value=old;}
function renderAll(){renderCategories();renderProducts();renderDashboard();renderStockOptions();}
document.querySelectorAll('.nav').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.nav,.page').forEach(el=>el.classList.remove('active'));button.classList.add('active');$(button.dataset.page).classList.add('active');$('heading').textContent=titles[button.dataset.page][0];$('subtitle').textContent=titles[button.dataset.page][1];}));
$('toggle-form').onclick=()=>{$('product-form-wrap').hidden=!$('product-form-wrap').hidden;};$('cancel-form').onclick=()=>{$('product-form-wrap').hidden=true;};
$('product-form').addEventListener('submit',event=>{event.preventDefault();const name=$('name').value.trim(),category=$('category').value,price=Number($('price').value),quantity=Number($('quantity').value),minimum=Number($('minimum').value);if(!name||!store.categories.includes(category)||!Number.isFinite(price)||price<0||![quantity,minimum].every(x=>Number.isInteger(x)&&x>=0)){notify('Enter valid product details');return;}const id='P'+String(Date.now());store.products.push({id,name,category,price,quantity,minimum,supplier:$('supplier').value.trim()});saveData();renderAll();event.target.reset();$('product-form-wrap').hidden=true;notify('Product added');});
$('category-form').addEventListener('submit',event=>{event.preventDefault();const value=$('new-category').value.trim();if(!value||store.categories.some(c=>c.toLowerCase()===value.toLowerCase())){notify('Category already exists or is empty');return;}store.categories.push(value);saveData();renderAll();event.target.reset();notify('Category added');});
$('search').addEventListener('input',renderProducts);$('filter-category').addEventListener('change',renderProducts);$('filter-status').addEventListener('change',renderProducts);
$('product-rows').addEventListener('click',event=>{const edit=event.target.closest('[data-edit]'),del=event.target.closest('[data-delete]');if(edit)notify('TODO: Student 2 implements editing');if(del)notify('TODO: Student 2 implements deletion with confirmation');});
renderAll();
