/* ========================================================================================

                                    TRANG ADMIN

============================================================================================= */

const ADMIN_PRODUCTS_KEY = "gibor_admin_products";
const ADMIN_ORDERS_KEY = "gibor_orders";
const ADMIN_USERS_KEY = "gibor_users";

const defaultProducts = [
  { id: "p-1", name: "Cà phê đen", category: "Cà phê", price: 25000 },
  { id: "p-2", name: "Cà phê sữa", category: "Cà phê", price: 30000 },
  { id: "p-3", name: "Bạc xỉu", category: "Cà phê", price: 32000 },
  { id: "p-4", name: "Cà phê muối", category: "Cà phê", price: 36000 },
  { id: "p-5", name: "Matcha Latte", category: "Matcha", price: 40000 },
  { id: "p-6", name: "Matcha Dừa", category: "Matcha", price: 36000 },
  { id: "p-7", name: "Matcha Dâu", category: "Matcha", price: 36000 },
  { id: "p-8", name: "Matcha Xoài", category: "Matcha", price: 36000 },
  { id: "p-9", name: "Trà Dâu", category: "Trà", price: 30000 },
  { id: "p-10", name: "Trà Vải", category: "Trà", price: 30000 },
  { id: "p-11", name: "Trà Lựu Hibiscus", category: "Trà", price: 30000 },
  { id: "p-12", name: "Trà Đào", category: "Trà", price: 28000 },
  { id: "p-13", name: "Trà Sữa Trân Châu Đường Đen", category: "Trà sữa", price: 30000 },
  { id: "p-14", name: "Trà Sữa Truyền Thống", category: "Trà sữa", price: 25000 },
  { id: "p-15", name: "Trà Sữa Thái Xanh", category: "Trà sữa", price: 20000 },
  { id: "p-16", name: "Trà Sữa Caramel", category: "Trà sữa", price: 35000 },
  { id: "p-17", name: "Trà Sữa Gạo Rang", category: "Trà sữa", price: 30000 },
  { id: "p-18", name: "Trà Sữa Kem Cheese", category: "Trà sữa", price: 38000 },
  { id: "p-19", name: "Trà Sữa Khoai Môn", category: "Trà sữa", price: 32000 },
  { id: "p-20", name: "Trà Sữa Oreo", category: "Trà sữa", price: 30000 },
  { id: "p-21", name: "Trà Sữa Pudding", category: "Trà sữa", price: 35000 },
  { id: "p-22", name: "Trà Sữa Socola", category: "Trà sữa", price: 20000 },
  { id: "p-23", name: "Bánh Cheesecake", category: "Bánh ngọt", price: 35000 },
  { id: "p-24", name: "Bánh Cupcake", category: "Bánh ngọt", price: 33000 },
  { id: "p-25", name: "Bánh Bông Lan Kem Tươi", category: "Bánh ngọt", price: 30000 },
  { id: "p-26", name: "Bánh Cookie", category: "Bánh ngọt", price: 36000 },
  { id: "p-27", name: "Bánh Brownie Socola", category: "Bánh ngọt", price: 40000 },
  { id: "p-28", name: "Bánh Mousse Dâu", category: "Bánh ngọt", price: 38000 },
  { id: "p-29", name: "Bánh Tiramisu", category: "Bánh ngọt", price: 35000 },
  { id: "p-30", name: "Bánh Red Velvet", category: "Bánh ngọt", price: 45000 },
  { id: "p-31", name: "Combo 1", category: "Combo", price: 55000 },
  { id: "p-32", name: "Combo 2", category: "Combo", price: 50000 },
  { id: "p-33", name: "Combo 3", category: "Combo", price: 60000 },
  { id: "p-34", name: "Combo 4", category: "Combo", price: 58000 },
  { id: "p-35", name: "Combo 5", category: "Combo", price: 45000 },
  { id: "p-36", name: "Combo 6", category: "Combo", price: 52000 },
  { id: "p-37", name: "Combo 7", category: "Combo", price: 48000 },
  { id: "p-38", name: "Combo 8", category: "Combo", price: 55000 },
  { id: "p-39", name: "Combo 9", category: "Combo", price: 50000 },
  { id: "p-40", name: "Combo 10", category: "Combo", price: 48000 },
  { id: "p-41", name: "Combo 11", category: "Combo", price: 52000 },
  { id: "p-42", name: "Combo 12", category: "Combo", price: 55000 },
  { id: "p-43", name: "Trân châu đen", category: "Topping", price: 10000 },
  { id: "p-44", name: "Trân châu trắng", category: "Topping", price: 10000 },
  { id: "p-45", name: "Thạch trái cây", category: "Topping", price: 10000 },
  { id: "p-46", name: "Thạch dừa", category: "Topping", price: 10000 },
  { id: "p-47", name: "Thạch matcha", category: "Topping", price: 15000 },
  { id: "p-48", name: "Thạch củ năng", category: "Topping", price: 15000 },
  { id: "p-49", name: "Khoai môn bóng", category: "Topping", price: 15000 },
];

function parseJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function getProducts() {
  const products = parseJSON(ADMIN_PRODUCTS_KEY, null);
  if (Array.isArray(products) && products.length) return products;
  localStorage.setItem(ADMIN_PRODUCTS_KEY, JSON.stringify(defaultProducts));
  return defaultProducts;
}

function saveProducts(products) {
  localStorage.setItem(ADMIN_PRODUCTS_KEY, JSON.stringify(products));
}

function getUsers() {
  if (typeof UserManager !== "undefined") return UserManager.getUsers();
  return parseJSON(ADMIN_USERS_KEY, []);
}

function getOrders() {
  return parseJSON(ADMIN_ORDERS_KEY, []);
}

function saveOrders(orders) {
  localStorage.setItem(ADMIN_ORDERS_KEY, JSON.stringify(orders));
}

function formatMoney(value) {
  return Number(value || 0).toLocaleString("vi-VN") + "đ";
}

function formatDate(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleDateString("vi-VN");
}

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getInitials(user) {
  const name = user.displayName || `${user.lastName || ""} ${user.firstName || ""}`.trim() || user.email || "A";
  return name
    .split(" ")
    .filter(Boolean)
    .slice(-2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

function getOrderTotal(order) {
  return Number(order.total || order.grandTotal || order.subtotal || 0);
}

function getOrderDate(order) {
  return order.createdAt || order.date || order.orderDate || new Date().toISOString();
}

function getOrderItemsText(order) {
  const items = Array.isArray(order.items) ? order.items : [];
  if (!items.length) return "Chưa có chi tiết";
  return items
    .slice(0, 3)
    .map((item) => {
      const qty = Number(item.quantity || item.qty || 1);
      return `${item.name || "Sản phẩm"} x${qty}`;
    })
    .join(", ");
}

function getRevenueByDay(days = 7) {
  const orders = getOrders();
  const today = new Date();
  const labels = [];

  for (let index = days - 1; index >= 0; index--) {
    const date = new Date(today);
    date.setDate(today.getDate() - index);
    const key = date.toISOString().slice(0, 10);
    labels.push({
      key,
      label: date.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" }),
      value: 0,
    });
  }

  orders.forEach((order) => {
    const date = new Date(getOrderDate(order));
    if (Number.isNaN(date.getTime())) return;
    const key = date.toISOString().slice(0, 10);
    const target = labels.find((item) => item.key === key);
    if (target) target.value += getOrderTotal(order);
  });

  return labels;
}

function renderRevenueBars(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const data = getRevenueByDay(7);
  const max = Math.max(...data.map((item) => item.value), 1);

  target.innerHTML = data
    .map((item) => {
      const height = Math.max(14, Math.round((item.value / max) * 210));
      return `
        <div class="revenue-bar-item">
          <div class="revenue-bar" style="height:${height}px" title="${formatMoney(item.value)}"></div>
          <div class="revenue-bar-label">
            <span>${item.label}</span>
            <span>${formatMoney(item.value)}</span>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderDashboard() {
  const users = getUsers();
  const products = getProducts();
  const orders = getOrders();
  const revenue = orders.reduce((sum, order) => sum + getOrderTotal(order), 0);

  document.getElementById("statUsers").textContent = users.length;
  document.getElementById("statProducts").textContent = products.length;
  document.getElementById("statOrders").textContent = orders.length;
  document.getElementById("statRevenue").textContent = formatMoney(revenue);

  const recentTable = document.getElementById("recentOrdersTable");
  const recentOrders = [...orders]
    .sort((a, b) => new Date(getOrderDate(b)) - new Date(getOrderDate(a)))
    .slice(0, 5);

  recentTable.innerHTML = recentOrders.length
    ? recentOrders
        .map(
          (order) => `
            <tr>
              <td><strong>${escapeHTML(order.code || order.id || "GIBOR")}</strong></td>
              <td>${escapeHTML(order.userName || order.customerName || "Khách hàng")}</td>
              <td>${formatMoney(getOrderTotal(order))}</td>
              <td><span class="status-badge">${escapeHTML(order.status || "Đã ghi nhận")}</span></td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td class="admin-empty" colspan="4">Chưa có đơn hàng nào.</td></tr>`;

  renderRevenueBars("dashboardRevenueBars");
}

function renderAccounts() {
  const table = document.getElementById("accountsTable");
  const users = getUsers();

  table.innerHTML = users.length
    ? users
        .map(
          (user) => `
            <tr>
              <td>
                <div class="admin-name-cell">
                  <span class="admin-avatar">${escapeHTML(getInitials(user))}</span>
                  <div>
                    <strong>${escapeHTML(user.displayName || `${user.lastName || ""} ${user.firstName || ""}`.trim() || "Người dùng")}</strong>
                    <div class="admin-muted">${escapeHTML(user.provider || "email")}</div>
                  </div>
                </div>
              </td>
              <td>${escapeHTML(user.email || "-")}</td>
              <td>${escapeHTML(user.phone || "-")}</td>
              <td>${formatDate(user.createdAt)}</td>
              <td>
                <div class="admin-actions">
                  <button class="admin-action danger" data-delete-user="${escapeHTML(user.id)}">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td class="admin-empty" colspan="5">Chưa có tài khoản nào được đăng ký.</td></tr>`;
}

function renderProducts() {
  const table = document.getElementById("productsTable");
  const products = getProducts();

  table.innerHTML = products
    .map(
      (product) => `
        <tr>
          <td><strong>${escapeHTML(product.name)}</strong></td>
          <td><span class="category-badge">${escapeHTML(product.category)}</span></td>
          <td>${formatMoney(product.price)}</td>
          <td>
            <div class="admin-actions">
              <button class="admin-action ghost" data-edit-product="${escapeHTML(product.id)}">
                <i class="fas fa-pen"></i>
              </button>
              <button class="admin-action danger" data-delete-product="${escapeHTML(product.id)}">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `,
    )
    .join("");
    const statProducts = document.getElementById("statProducts");
    if (statProducts) {
      statProducts.textContent = products.length;
    }
}

function renderOrders() {
  const table = document.getElementById("ordersTable");
  const orders = getOrders();

  table.innerHTML = orders.length
    ? orders
        .map(
          (order, index) => `
            <tr>
              <td>
                <strong>${escapeHTML(order.code || order.id || `DH-${index + 1}`)}</strong>
                <div class="admin-muted">${formatDate(getOrderDate(order))}</div>
              </td>
              <td>${escapeHTML(order.userName || order.customerName || "Khách hàng")}</td>
              <td>${escapeHTML(getOrderItemsText(order))}</td>
              <td>${formatMoney(getOrderTotal(order))}</td>
              <td>
                <select class="admin-status-select" data-order-index="${index}">
                  ${["Đã ghi nhận", "Đang xử lý", "Đang giao", "Hoàn tất", "Đã hủy"]
                    .map(
                      (status) =>
                        `<option value="${status}" ${status === (order.status || "Đã ghi nhận") ? "selected" : ""}>${status}</option>`,
                    )
                    .join("")}
                </select>
              </td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td class="admin-empty" colspan="5">Chưa có đơn hàng nào để quản lí.</td></tr>`;
}

function renderRevenueReport() {
  const orders = getOrders();
  const revenue = orders.reduce((sum, order) => sum + getOrderTotal(order), 0);
  const avg = orders.length ? revenue / orders.length : 0;
  const data = getRevenueByDay(7);
  const best = data.reduce((top, item) => (item.value > top.value ? item : top), data[0]);

  document.getElementById("avgOrderValue").textContent = formatMoney(avg);
  document.getElementById("paidOrderCount").textContent = orders.length;
  document.getElementById("bestRevenueDay").textContent = best && best.value ? `${best.label} (${formatMoney(best.value)})` : "-";

  renderRevenueBars("revenueBars");
}

function renderAll() {
  renderDashboard();
  renderAccounts();
  renderProducts();
  renderOrders();
  renderRevenueReport();
}

function resetProductForm() {
  document.getElementById("productId").value = "";
  document.getElementById("productForm").reset();
  document.getElementById("productSubmitText").textContent = "Thêm sản phẩm";
}

function bindNavigation() {
  const title = document.getElementById("adminPageTitle");
  const titleMap = {
    dashboard: "Dashboard",
    accounts: "Quản lí tài khoản",
    products: "Quản lí sản phẩm",
    orders: "Quản lí đơn hàng",
    revenue: "Báo cáo doanh thu",
  };

  document.querySelectorAll(".admin-nav-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const tab = button.dataset.adminTab;
      document.querySelectorAll(".admin-nav-btn").forEach((item) => item.classList.remove("active"));
      document.querySelectorAll(".admin-panel").forEach((panel) => panel.classList.remove("active"));
      button.classList.add("active");
      document.querySelector(`[data-admin-panel="${tab}"]`).classList.add("active");
      title.textContent = titleMap[tab] || "Admin";
    });
  });
}

function bindProductForm() {
  document.getElementById("productForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const id = document.getElementById("productId").value;
    const name = document.getElementById("productName").value.trim();
    const category = document.getElementById("productCategory").value;
    const price = Number(document.getElementById("productPrice").value);

    if (!name || !category || !price) return;

    const products = getProducts();
    if (id) {
      const index = products.findIndex((product) => product.id === id);
      if (index !== -1) products[index] = { ...products[index], name, category, price };
    } else {
      products.unshift({ id: `p-${Date.now()}`, name, category, price });
    }

    saveProducts(products);
    resetProductForm();
    renderAll();
  });

  document.getElementById("resetProductForm").addEventListener("click", resetProductForm);
}

function bindTableActions() {
  document.addEventListener("click", (event) => {
    const editProductId = event.target.closest("[data-edit-product]")?.dataset.editProduct;
    const deleteProductId = event.target.closest("[data-delete-product]")?.dataset.deleteProduct;
    const deleteUserId = event.target.closest("[data-delete-user]")?.dataset.deleteUser;

    if (editProductId) {
      const product = getProducts().find((item) => item.id === editProductId);
      if (!product) return;
      document.getElementById("productId").value = product.id;
      document.getElementById("productName").value = product.name;
      document.getElementById("productCategory").value = product.category;
      document.getElementById("productPrice").value = product.price;
      document.getElementById("productSubmitText").textContent = "Cập nhật";
    }

    if (deleteProductId && confirm("Bạn có chắc muốn xoá sản phẩm này?")) {
      saveProducts(getProducts().filter((product) => product.id !== deleteProductId));
      renderAll();
    }

    if (deleteUserId && confirm("Bạn có chắc muốn xoá tài khoản này?")) {
      const users = getUsers().filter((user) => String(user.id) !== String(deleteUserId));
      localStorage.setItem(ADMIN_USERS_KEY, JSON.stringify(users));
      const currentUser = parseJSON("gibor_current_user", null);
      if (currentUser && String(currentUser.id) === String(deleteUserId)) {
        localStorage.removeItem("gibor_current_user");
      }
      renderAll();
    }
  });

  document.addEventListener("change", (event) => {
    if (!event.target.matches("[data-order-index]")) return;
    const orders = getOrders();
    const index = Number(event.target.dataset.orderIndex);
    if (!orders[index]) return;
    orders[index].status = event.target.value;
    saveOrders(orders);
    renderAll();
  });
}

function handleLogout() {
  if (confirm("Bạn có chắc muốn đăng xuất?")) {
    localStorage.removeItem("gibor_current_user");
    window.location.href = "login.html";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const todayEl = document.getElementById("adminToday");
  if (todayEl) {
    todayEl.textContent = new Date().toLocaleDateString("vi-VN", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  bindNavigation();
  bindProductForm();
  bindTableActions();
  renderAll();
});


let accounts = JSON.parse(localStorage.getItem("adminAccounts")) || [
  {
    name: "Nguyễn Bảo",
    email: "bao06@gmail.com",
    phone: "0909090909",
    createdAt: "13/2/2026",
  },
  {
    name: "Nguyễn Bảo",
    email: "bao04@gmail.com",
    phone: "0808080808",
    createdAt: "16/3/2026",
  },
  {
    name: "Bảo Nguyễn",
    email: "bao09@gmail.com",
    phone: "0088007112",
    createdAt: "23/3/2026",
  },
  {
    name: "Bảo Nguyễn",
    email: "bao1@gmail.com",
    phone: "0088007112",
    createdAt: "1/6/2026",
  },
];

const accountsTable = document.getElementById("accountsTable");
const accountForm = document.getElementById("accountForm");
const accountIndex = document.getElementById("accountIndex");
const accountName = document.getElementById("accountName");
const accountEmail = document.getElementById("accountEmail");
const accountPhone = document.getElementById("accountPhone");
const accountSubmitText = document.getElementById("accountSubmitText");
const resetAccountForm = document.getElementById("resetAccountForm");

function saveAccounts() {
  localStorage.setItem("adminAccounts", JSON.stringify(accounts));
}

function renderAccounts() {
  if (!accountsTable) return;

  accountsTable.innerHTML = accounts
    .map((account, index) => {
      return `
        <tr>
          <td>
            <div class="admin-name-cell">
              <span class="admin-avatar">${account.name
                .split(" ")
                .map(word => word[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}</span>
              <div>
                <strong>${account.name}</strong>
                <div class="admin-muted">email</div>
              </div>
            </div>
          </td>
          <td>${account.email}</td>
          <td>${account.phone}</td>
          <td>${account.createdAt}</td>
          <td>
            <div class="admin-actions">
              <button class="admin-action ghost" onclick="editAccount(${index})">
                <i class="fas fa-pen"></i>
              </button>
              <button class="admin-action danger" onclick="deleteAccount(${index})">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
    const statUsers = document.getElementById("statUsers");
    if (statUsers) {
      statUsers.textContent = accounts.length;
    }
}

function editAccount(index) {
  const account = accounts[index];

  accountIndex.value = index;
  accountName.value = account.name;
  accountEmail.value = account.email;
  accountPhone.value = account.phone;
  accountSubmitText.textContent = "Cập nhật tài khoản";
} 

function deleteAccount(index) {
  if (confirm("Bạn có chắc muốn xoá tài khoản này không?")) {
    accounts.splice(index, 1);
    saveAccounts();
    renderAccounts();
    renderDashboard();
  }
}

function resetAccount() {
  accountIndex.value = "";
  accountName.value = "";
  accountEmail.value = "";
  accountPhone.value = "";
  accountSubmitText.textContent = "Thêm tài khoản";
}

if (accountForm) {
  accountForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      name: accountName.value.trim(),
      email: accountEmail.value.trim(),
      phone: accountPhone.value.trim(),
      createdAt: new Date().toLocaleDateString("vi-VN"),
    };

    if (accountIndex.value === "") {
      accounts.push(data);
    } else {
      accounts[accountIndex.value] = {
        ...accounts[accountIndex.value],
        ...data,
      };
    }

    saveAccounts();
    renderAccounts();
    renderDashboard();
    resetAccount();
  });
}

if (resetAccountForm) {
  resetAccountForm.addEventListener("click", resetAccount);
}

renderAccounts();