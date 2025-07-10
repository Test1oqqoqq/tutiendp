# Tu Tiên Game - Cập Nhật Hệ Thống Pet & Dungeon

## 🐾 Hệ Thống Pet Mới

### 🌟 Phân Loại Pet Theo Độ Hiếm & Màu Sắc
- **⚪ Bình Thường** (50% tỉ lệ) - Bonus +0% EXP/Phần thưởng - Màu Trắng
- **🟢 Không Phổ Biến** (30% tỉ lệ) - Bonus +20% EXP/Phần thưởng - Màu Xanh Lá
- **🔵 Hiếm** (15% tỉ lệ) - Bonus +50% EXP/Phần thưởng - Màu Xanh Dương
- **🟣 Sử Thi** (4% tỉ lệ) - Bonus +100% EXP/Phần thưởng - Màu Tím
- **🟡 Truyền Thuyết** (1% tỉ lệ) - Bonus +200% EXP/Phần thưởng - Màu Vàng

### 🎁 Pet Box Cải Tiến
- Mở rương pet hiện hiển thị độ hiếm của pet nhận được
- Thông báo chi tiết: "🎁 Đã mở Rương Pet! 🐾 Bạn nhận được: 🟡 🌟 Thần Long ⭐ Độ hiếm: Truyền Thuyết"

### 🔧 Tính Năng Pet Mới
- `pet inv` - Xem kho pet với thông tin độ hiếm
- `pet info` - Xem thông tin chi tiết pet đang trang bị
- `pet equip <tên>` - Trang bị pet
- Pet bonus áp dụng cho: Train, PvP, Boss, Dungeon

## 🏰 Hệ Thống Dungeon Cải Tiến

### ⏰ Cooldown 24 Giờ
- Chỉ có thể vào dungeon 1 lần mỗi 24 giờ
- Hiển thị thời gian còn lại: "⏰ Phải chờ X giờ nữa mới có thể vào dungeon tiếp!"

### 🐾 Pet Bonus cho Dungeon
- Pet tăng tỉ lệ thành công dungeon
- Pet tăng phần thưởng EXP và Linh Thạch khi thành công
- Thông báo khi pet bonus được áp dụng

## 💪 Cải Tiến Hệ Thống Bonus

### 🧘 Training
- Pet bonus áp dụng cho EXP nhận được
- Hiển thị "(🐾 Pet bonus)" trong thông báo

### ⚔️ PvP
- Pet bonus tăng sức mạnh chiến đấu
- Pet của cả hai người chơi đều được tính bonus

### 🐲 Boss Fight
- Pet bonus tăng sát thương đối với boss
- Hiển thị "(🐾 Pet bonus)" khi gây sát thương

### 📊 Info Command
- Hiển thị pet và độ hiếm trong thông tin người chơi
- Format: "🐾 Pet: ⚪ 🌟 Thần Long (Truyền Thuyết)"

## 🎮 Cách Sử Dụng

1. **Mua rương pet**: `buy petbox`
2. **Mở rương**: `use petbox` 
3. **Xem kho pet**: `pet inv`
4. **Trang bị pet**: `pet equip ⚪ 🌟 Thần Long`
5. **Xem thông tin pet**: `pet info`
6. **Vào dungeon**: `dungeon` (24h cooldown)
7. **Xem danh hiệu**: `title`
8. **Trang bị danh hiệu**: `title equip <tên>`

## 🔥 Lợi Ích Pet Theo Độ Hiếm

- **Truyền Thuyết**: +200% EXP từ train, +200% damage boss, +200% thành công dungeon
- **Sử Thi**: +100% EXP từ train, +100% damage boss, +100% thành công dungeon  
- **Hiếm**: +50% bonus cho tất cả hoạt động
- **Không Phổ Biến**: +20% bonus
- **Bình Thường**: Không có bonus đặc biệt

Tất cả pet đều có icon màu để dễ nhận biết!

## 🏆 Hệ Thống Danh Hiệu (Title) Mới

### 🎖️ Phân Loại Danh Hiệu
- **🌟 Cảnh Giới**: 🌱 Tu Luyện Sinh, ⚡ Lôi Kiếp Chủ, 🌟 Phi Thăng Tiên
- **⚔️ PvP**: ⚔️ Chiến Binh (5 thắng), 🏆 Võ Lâm Minh Chủ (20 thắng), 👑 Thiên Hạ Đệ Nhất (50 thắng)
- **🐾 Pet**: 🐾 Thú Chủ (5 pet), 🦄 Linh Thú Sư (10 pet), 🟡 Truyền Thuyết Sư (pet legendary)
- **💥 Độ Kiếp**: 💥 Độ Kiếp Vương (10 lần), 🌈 Thiên Kiếp Chủ (25 lần)
- **🧘 Tu Luyện**: 🧘 Khổ Hạnh Tăng (100 lần), ⭐ Tu Luyện Cuồng (500 lần)
- **🐉 Boss**: 🐉 Đồ Long Giả (10k damage), 🔥 Diệt Thế Ma Vương (50k damage)
- **🏯 Clan**: 🏯 Bang Chủ (leader), 🎯 Công Thần (1000 đóng góp)
- **💰 Tài Sản**: 💎 Đại Phú Hào (1000 LT), 💰 Tài Phiệt (5000 LT)
- **🌟 Đặc Biệt**: 🔄 Tái Sinh Giả, ♾️ Bất Tử, 🎭 Ẩn Danh Nhân, 🌟 Thiên Tài

### 🎯 Tính Năng Title
- **Auto-unlock**: Tự động mở khóa danh hiệu khi đạt điều kiện
- **Auto-equip**: Tự động trang bị danh hiệu cao nhất nếu chưa có
- **Display**: Hiển thị trong info và top rankings
- **Notification**: Thông báo khi nhận danh hiệu mới

### 📋 Commands Title
- `title` - Xem menu danh hiệu và danh hiệu hiện tại
- `title list` - Xem danh hiệu đã mở khóa
- `title equip <tên>` - Trang bị danh hiệu
- `title remove` - Gỡ danh hiệu hiện tại
- `title all` - Xem tất cả danh hiệu và tiến độ