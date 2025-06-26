// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  // Hitung total harga dari semua item
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  
  // Buat objek pesanan baru
  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    status: 'Menunggu'
  };
  
  // Tambahkan pesanan ke array orders
  orders.push(newOrder);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  // Cari pesanan berdasarkan ID
  const order = orders.find(order => order.id === orderId);
  
  // Jika pesanan ditemukan, update statusnya
  if (order) {
    order.status = status;
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  // Filter pesanan yang berstatus 'Selesai' dan hitung total revenue
  return orders
    .filter(order => order.status === 'Selesai')
    .reduce((total, order) => total + order.totalPrice, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  // Cari index pesanan berdasarkan ID
  const orderIndex = orders.findIndex(order => order.id === id);
  
  // Jika pesanan ditemukan, hapus dari array
  if (orderIndex !== -1) {
    orders.splice(orderIndex, 1);
  }
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };