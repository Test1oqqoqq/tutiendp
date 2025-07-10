const fs = require("fs");
const path = require("path");

module.exports = class {
  static config = {
    name: "tutien",
    aliases: [],
    version: "7.0.0",
    role: 0,
    author: "God Marcos",
    info: "Tu luyện nâng cấp với hệ thống Clan hoàn chỉnh",
    Category: "Game",
    guides: "[train|dokiep|info|quest|shop|boss|phai|clan|top|hide|pvp|dungeon|pet|battle|dph]",
    cd: 3,
    hasPrefix: true
  };

  static realms = ["Luyện Khí", "Trúc Cơ", "Kim Đan", "Nguyên Anh", "Hóa Thần", "Luyện Hư", "Độ Kiếp", "Đại Thừa", "Phi Thăng"];
  static dataPath = path.join(__dirname, "..", "..", "system", "data", "tutien.json");
  static bossPath = path.join(__dirname, "..", "..", "system", "data", "boss.json");
  static clanPath = path.join(__dirname, "..", "..", "system", "data", "clans.json");

  static factions = {
    tien: "🧘 Tu Tiên",
    ma: "😈 Tu Ma",
    phat: "🪷 Tu Phật",
    hachan: "❄️ Hắc Hàn"
  };

  static clanRoles = {
    member: { name: "🔷 Thành Viên", level: 0, expBonus: 0.05 },
    elder: { name: "🔶 Trưởng Lão", level: 1, expBonus: 0.10 },
    vice: { name: "🔸 Phó Bang Chủ", level: 2, expBonus: 0.15 },
    leader: { name: "👑 Bang Chủ", level: 3, expBonus: 0.20 }
  };

  static clanBuildings = {
    training: { name: "💪 Võ Đường", maxLevel: 5, baseCost: 50 },
    library: { name: "📚 Thư Viện", maxLevel: 5, baseCost: 60 },
    treasury: { name: "💰 Kho Bạc", maxLevel: 5, baseCost: 70 },
    altar: { name: "⚡ Pháp Đàn", maxLevel: 5, baseCost: 80 }
  };

  static items = {
    ngoc: { name: "💠 Ngọc May Mắn", price: 2, effect: "+20% tỉ lệ độ kiếp" },
    danexp: { name: "💊 Đan EXP", price: 2, effect: "+1000 EXP" },
    danphuc: { name: "🧪 Đan Hồi Phục", price: 3, effect: "Bảo vệ khi độ kiếp fail" },
    thechat: { name: "💼 Gói Thể Chất", price: 1, effect: "+10~20 Thể Chất" },
    petbox: { name: "🎁 Rương Pet", price: 5, effect: "Mở ra 1 pet ngẫu nhiên" },
    
    // Battle items
    energy: { name: "⚡ Năng Lượng Chiến Đấu", price: 3, effect: "+50 năng lượng chiến đấu" },
    skillbook: { name: "📖 Sách Kỹ Năng", price: 10, effect: "Nâng cấp ngẫu nhiên 1 kỹ năng" },
    petfood: { name: "🍖 Thức Ăn Pet", price: 4, effect: "+EXP cho pet đang trang bị" },
    
    // Clan items
    clanstone: { name: "🏗️ Đá Xây Dựng", price: 10, effect: "Nâng cấp công trình clan" },
    clanbuff: { name: "⚡ Buff Clan", price: 8, effect: "+50% EXP cho toàn clan trong 1h" },
    clantoken: { name: "🎖️ Token Clan", price: 15, effect: "Dùng để tham gia event clan" }
  };

  static bossList = [
    { name: "Thần Long", hp: 50000 },
    { name: "Thiên Ưng", hp: 52000 },
    { name: "Bọ Cạp Linh Hồn", hp: 55000 },
    { name: "Hỏa Kỳ Lân", hp: 58000 },
    { name: "Băng Tâm Hồ", hp: 60000 },
    
    // Clan bosses
    { name: "Ma Vương Cổ Đại", hp: 100000, type: "clan" },
    { name: "Rồng Huyết Tộc", hp: 120000, type: "clan" },
    { name: "Thiên Ma Đế Quân", hp: 150000, type: "clan" }
  ];

  static petList = [
    "🐶 Chó Nhỏ", "🐱 Mèo Mun", "🦊 Cáo", "🐯 Hổ Nhỏ", "🐲 Rồng Con",
    "🦄 Kỳ Lân", "🐵 Khỉ Thông Minh", "🦅 Ưng Lửa", "🐍 Xà Tinh", "🦖 Khủng Long",
    "👻 Bóng Ma", "🦂 Bọ Cạp Lửa", "🐺 Sói Băng", "🐉 Long Linh", "🧚 Tiên Linh",
    "💀 Lich", "🔥 Phượng Hoàng", "🌪️ Rồng Gió", "⚡ Rồng Sấm", "🌌 Rồng Vũ Trụ"
  ];

  // Enhanced Pet System with Rarity
  static petRarities = {
    common: { name: "⚪ Thường", chance: 0.5, statMultiplier: 1, color: "⚪" },
    rare: { name: "🔵 Hiếm", chance: 0.3, statMultiplier: 1.5, color: "🔵" },
    epic: { name: "🟣 Sử Thi", chance: 0.15, statMultiplier: 2, color: "🟣" },
    legendary: { name: "🟡 Huyền Thoại", chance: 0.04, statMultiplier: 3, color: "🟡" },
    mythical: { name: "🔴 Thần Thoại", chance: 0.01, statMultiplier: 5, color: "🔴" }
  };

  static petTypes = [
    { name: "🐶 Chó Nhỏ", baseAttack: 50, baseDefense: 30, baseSpeed: 40, element: "earth" },
    { name: "🐱 Mèo Mun", baseAttack: 40, baseDefense: 35, baseSpeed: 60, element: "dark" },
    { name: "🦊 Cáo", baseAttack: 45, baseDefense: 25, baseSpeed: 70, element: "fire" },
    { name: "🐯 Hổ Nhỏ", baseAttack: 80, baseDefense: 50, baseSpeed: 45, element: "earth" },
    { name: "🐲 Rồng Con", baseAttack: 100, baseDefense: 80, baseSpeed: 60, element: "fire" },
    { name: "🦄 Kỳ Lân", baseAttack: 90, baseDefense: 70, baseSpeed: 80, element: "light" },
    { name: "🐵 Khỉ Thông Minh", baseAttack: 55, baseDefense: 40, baseSpeed: 85, element: "wind" },
    { name: "🦅 Ưng Lửa", baseAttack: 75, baseDefense: 45, baseSpeed: 90, element: "fire" },
    { name: "🐍 Xà Tinh", baseAttack: 65, baseDefense: 55, baseSpeed: 50, element: "poison" },
    { name: "🦖 Khủng Long", baseAttack: 120, baseDefense: 100, baseSpeed: 30, element: "earth" },
    { name: "👻 Bóng Ma", baseAttack: 70, baseDefense: 20, baseSpeed: 95, element: "dark" },
    { name: "🦂 Bọ Cạp Lửa", baseAttack: 85, baseDefense: 60, baseSpeed: 40, element: "fire" },
    { name: "🐺 Sói Băng", baseAttack: 75, baseDefense: 55, baseSpeed: 70, element: "ice" },
    { name: "🐉 Long Linh", baseAttack: 150, baseDefense: 120, baseSpeed: 80, element: "water" },
    { name: "🧚 Tiên Linh", baseAttack: 60, baseDefense: 40, baseSpeed: 100, element: "light" },
    { name: "💀 Lich", baseAttack: 95, baseDefense: 85, baseSpeed: 35, element: "dark" },
    { name: "🔥 Phượng Hoàng", baseAttack: 140, baseDefense: 90, baseSpeed: 85, element: "fire" },
    { name: "🌪️ Rồng Gió", baseAttack: 130, baseDefense: 80, baseSpeed: 110, element: "wind" },
    { name: "⚡ Rồng Sấm", baseAttack: 145, baseDefense: 95, baseSpeed: 75, element: "thunder" },
    { name: "🌌 Rồng Vũ Trụ", baseAttack: 200, baseDefense: 150, baseSpeed: 100, element: "void" }
  ];

  static petEquipment = {
    weapon: {
      "⚔️ Kiếm Sắt": { attack: 20, price: 10, rarity: "common" },
      "🗡️ Kiếm Bạc": { attack: 35, price: 25, rarity: "rare" },
      "⚡ Kiếm Sấm": { attack: 60, price: 50, rarity: "epic" },
      "🔥 Kiếm Lửa Thiêng": { attack: 100, price: 100, rarity: "legendary" },
      "🌌 Kiếm Vũ Trụ": { attack: 200, price: 250, rarity: "mythical" }
    },
    armor: {
      "🛡️ Giáp Da": { defense: 15, price: 8, rarity: "common" },
      "⚙️ Giáp Sắt": { defense: 30, price: 20, rarity: "rare" },
      "💎 Giáp Kim Cương": { defense: 50, price: 45, rarity: "epic" },
      "🌟 Giáp Thiên Thần": { defense: 85, price: 90, rarity: "legendary" },
      "🛡️ Giáp Hỗn Độn": { defense: 150, price: 200, rarity: "mythical" }
    },
    accessory: {
      "💍 Nhẫn Sức Mạnh": { attack: 10, defense: 5, speed: 5, price: 15, rarity: "rare" },
      "📿 Vòng Cổ Thần Thánh": { attack: 25, defense: 15, speed: 10, price: 40, rarity: "epic" },
      "👑 Vương Miện Bá Chủ": { attack: 50, defense: 30, speed: 20, price: 80, rarity: "legendary" },
      "🔮 Châu Báu Vô Cực": { attack: 100, defense: 60, speed: 40, price: 200, rarity: "mythical" }
    }
  };

  // Enhanced Battle System
  static battleTypes = {
    arena: { name: "🏟️ Đấu Trường", cooldown: 600000, reward: { exp: 500, lt: 3 } },
    tournament: { name: "🏆 Giải Đấu", cooldown: 1800000, reward: { exp: 1500, lt: 10 } },
    clanwar: { name: "⚔️ Chiến Tranh Clan", cooldown: 3600000, reward: { exp: 3000, lt: 25 } },
    challenge: { name: "💥 Thách Đấu", cooldown: 300000, reward: { exp: 200, lt: 1 } }
  };

  static battleSkills = {
    attack: { name: "🗡️ Tấn Công", damage: 1.2, cost: 10 },
    defend: { name: "🛡️ Phòng Thủ", damage: 0.8, defense: 1.5, cost: 8 },
    speed: { name: "💨 Tốc Độ", speed: 1.3, cost: 12 },
    special: { name: "⚡ Đặc Biệt", damage: 1.8, cost: 20 },
    heal: { name: "❤️ Hồi Phục", heal: 0.3, cost: 15 }
  };

  // Helper functions for enhanced systems
  static generatePetWithRarity() {
    const petType = this.petTypes[Math.floor(Math.random() * this.petTypes.length)];
    const rarityRoll = Math.random();
    let rarity = "common";
    
    let cumulative = 0;
    for (const [key, value] of Object.entries(this.petRarities)) {
      cumulative += value.chance;
      if (rarityRoll <= cumulative) {
        rarity = key;
        break;
      }
    }
    
    const rarityData = this.petRarities[rarity];
    return {
      name: petType.name,
      rarity: rarity,
      attack: Math.floor(petType.baseAttack * rarityData.statMultiplier),
      defense: Math.floor(petType.baseDefense * rarityData.statMultiplier),
      speed: Math.floor(petType.baseSpeed * rarityData.statMultiplier),
      element: petType.element,
      level: 1,
      exp: 0,
      equipment: { weapon: null, armor: null, accessory: null }
    };
  }

  static calculatePetPower(pet) {
    if (!pet) return 0;
    let power = pet.attack + pet.defense + pet.speed;
    
    // Add equipment bonuses
    Object.values(pet.equipment || {}).forEach(item => {
      if (item && this.getAllEquipment()[item]) {
        const eq = this.getAllEquipment()[item];
        power += (eq.attack || 0) + (eq.defense || 0) + (eq.speed || 0);
      }
    });
    
    return power * pet.level;
  }

  static getAllEquipment() {
    const all = {};
    Object.values(this.petEquipment).forEach(category => {
      Object.assign(all, category);
    });
    return all;
  }

  // Data management functions
  static getAllData() {
    try {
      if (!fs.existsSync(this.dataPath)) return {};
      return JSON.parse(fs.readFileSync(this.dataPath));
    } catch (e) {
      console.error("[tutien] Lỗi đọc data:", e);
      return {};
    }
  }

  static saveAllData(data) {
    try {
      fs.writeFileSync(this.dataPath, JSON.stringify(data, null, 2));
    } catch (e) {
      console.error("[tutien] Lỗi lưu data:", e);
    }
  }

  static getBossData() {
    try {
      if (!fs.existsSync(this.bossPath)) {
        const boss = this.createNewBoss();
        this.saveBossData(boss);
        return boss;
      }
      let boss = JSON.parse(fs.readFileSync(this.bossPath));
      const now = Date.now();
      if (boss.defeated && now - boss.defeatTime >= 86400000) {
        boss = this.createNewBoss();
        this.saveBossData(boss);
      }
      return boss;
    } catch (e) {
      console.error("[tutien] Lỗi đọc boss:", e);
      return null;
    }
  }

  static createNewBoss() {
    const pick = this.bossList[Math.floor(Math.random() * this.bossList.length)];
    return {
      name: pick.name,
      hp: pick.hp,
      damage: {},
      defeated: false,
      defeatTime: 0,
      type: pick.type || "normal"
    };
  }

  static saveBossData(data) {
    try {
      fs.writeFileSync(this.bossPath, JSON.stringify(data, null, 2));
    } catch (e) {
      console.error("[tutien] Lỗi lưu boss:", e);
    }
  }

  static getClanData() {
    try {
      if (!fs.existsSync(this.clanPath)) return {};
      return JSON.parse(fs.readFileSync(this.clanPath));
    } catch (e) {
      console.error("[tutien] Lỗi đọc clan data:", e);
      return {};
    }
  }

  static saveClanData(data) {
    try {
      fs.writeFileSync(this.clanPath, JSON.stringify(data, null, 2));
    } catch (e) {
      console.error("[tutien] Lỗi lưu clan data:", e);
    }
  }

  static async onLoad() {
    const dir = path.dirname(this.dataPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    if (!fs.existsSync(this.dataPath)) fs.writeFileSync(this.dataPath, "{}");
    if (!fs.existsSync(this.bossPath)) {
      const boss = this.createNewBoss();
      this.saveBossData(boss);
    }
    if (!fs.existsSync(this.clanPath)) fs.writeFileSync(this.clanPath, "{}");
  }

  static async onRun({ api, event, args }) {
    const { threadID, senderID, messageID } = event;
    const data = this.getAllData();
    const clanData = this.getClanData();
    const fbName = (await api.getUserInfo(senderID))[senderID].name;

    // Initialize user data
    if (!data[senderID]) {
      data[senderID] = {
        name: fbName,
        exp: 0,
        linhThach: 0,
        realm: "Luyện Khí",
        theChat: Math.floor(Math.random() * 101) + 50,
        items: {},
        faction: null,
        lastTrain: 0,
        pvpCooldown: 0,
        clan: null,
        clanRole: "member",
        clanContribution: 0,
        dokiepCount: 0,
        pvpWins: 0,
        trainCount: 0,
        bossDamage: 0,
        hideInfo: false,
        petInventory: [],
        petEquipped: null,
        lastClanActivity: 0,
        // Enhanced battle system data
        battleCooldowns: {},
        battleWins: { arena: 0, tournament: 0, clanwar: 0, challenge: 0 },
        battleSkills: { attack: 1, defend: 1, speed: 1, special: 0, heal: 0 },
        battleEnergy: 100,
        // Enhanced pet system data
        petCollection: [],
        petEquipment: [],
        petStorage: { weapon: [], armor: [], accessory: [] },
        petPoints: 0
      };
    }

    const user = data[senderID];
    user.name = fbName;
    
    // Backward compatibility - migrate old data to new structure
    if (!user.battleCooldowns) user.battleCooldowns = {};
    if (!user.battleWins) user.battleWins = { arena: 0, tournament: 0, clanwar: 0, challenge: 0 };
    if (!user.battleSkills) user.battleSkills = { attack: 1, defend: 1, speed: 1, special: 0, heal: 0 };
    if (user.battleEnergy === undefined) user.battleEnergy = 100;
    if (!user.petCollection) user.petCollection = [];
    if (!user.petEquipment) user.petEquipment = [];
    if (!user.petStorage) user.petStorage = { weapon: [], armor: [], accessory: [] };
    if (user.petPoints === undefined) user.petPoints = 0;
    if (!user.lastEnergyRegen) user.lastEnergyRegen = Date.now();
    
    // Migrate old pet system to new system
    if (user.petInventory && user.petInventory.length > 0 && user.petCollection.length === 0) {
      user.petInventory.forEach(petName => {
        const petType = this.petTypes.find(p => p.name === petName);
        if (petType) {
          const pet = {
            id: Date.now() + Math.random(),
            name: petName,
            rarity: "common",
            attack: petType.baseAttack,
            defense: petType.baseDefense,
            speed: petType.baseSpeed,
            element: petType.element,
            level: 1,
            exp: 0,
            equipment: { weapon: null, armor: null, accessory: null }
          };
          user.petCollection.push(pet);
        }
      });
      if (user.petEquipped && typeof user.petEquipped === 'string') {
        const equippedPet = user.petCollection.find(p => p.name === user.petEquipped);
        user.petEquipped = equippedPet?.id || null;
      }
    }
    const cmd = args[0]?.toLowerCase();

    if (!cmd) {
      const msg = `📜 𝗧𝗨 𝗧𝗜Ê𝗡 𝗠𝗘𝗡𝗨 𝗩�.𝟬 - 𝗘𝗡𝗛𝗔𝗡𝗖𝗘𝗗\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
        `🌱 Tu luyện: train | dokiep | quest | dungeon | info\n` +
        `⚔️ Đấu phá: battle | dph | pvp <@tag> | boss\n` +
        `🐾 Pet: pet | pet list | pet shop | pet info\n` +
        `🏯 Bang hội: clan | cjoin | cleave | cinfo | cupgrade\n` +
        `🛍️ Vật phẩm: shop | buy <mã> | use <mã> | inv\n` +
        `⚙️ Hệ thống: top | clantop | hide | phai | rebirth`;
      return api.sendMessage(msg, threadID, messageID);
    }

    // Enhanced training with clan bonus
    if (cmd === "train") {
      const now = Date.now();
      const cd = 180000; // 3 minutes
      if (now - user.lastTrain < cd) {
        const left = Math.ceil((cd - (now - user.lastTrain)) / 1000);
        return api.sendMessage(`⏱️ Còn ${left}s mới có thể train tiếp.`, threadID, messageID);
      }

      let exp = Math.floor(Math.random() * 201) + 100;
      
      // Faction bonus
      if (user.faction === "hachan" && user.theChat > 100) exp += 50;
      
      // Clan bonus
      if (user.clan && clanData[user.clan]) {
        const clan = clanData[user.clan];
        const roleBonus = this.clanRoles[user.clanRole]?.expBonus || 0;
        const buildingBonus = (clan.buildings?.training || 0) * 0.05;
        exp = Math.floor(exp * (1 + roleBonus + buildingBonus));
        
        // Add clan contribution
        user.clanContribution += Math.floor(exp * 0.1);
        clan.totalContribution = (clan.totalContribution || 0) + Math.floor(exp * 0.1);
      }

      user.exp += exp;
      user.trainCount++;
      user.linhThach += Math.random() < 0.3 ? 1 : 0;
      user.lastTrain = now;
      user.lastClanActivity = now;

      // Daily quest progress
      if (user.dailyQuest?.type === "train" && user.dailyQuest.date === new Date().toDateString()) {
        user.dailyQuest.progress++;
      }

      this.saveAllData(data);
      this.saveClanData(clanData);
      
      let msg = `🧘 Bạn nhận được ${exp} EXP`;
      if (user.clan) msg += ` (có bonus từ clan ${user.clan})`;
      return api.sendMessage(msg + ".", threadID, messageID);
    }

    // Enhanced breakthrough system
    if (cmd === "dokiep") {
      const index = this.realms.indexOf(user.realm);
      if (index >= this.realms.length - 1) return api.sendMessage("🚫 Đã đạt cảnh giới tối đa.", threadID, messageID);
      
      const next = this.realms[index + 1];
      const reqExp = (index + 1) * 1500;
      
      if (user.exp < reqExp) return api.sendMessage(`⚠️ Cần ${reqExp} EXP để độ kiếp.`, threadID, messageID);
      if (user.theChat < 50) return api.sendMessage("❌ Thể chất không đủ.", threadID, messageID);
      
      let rate = 0.6;
      
      // Faction bonus
      if (user.faction === "ma") rate += 0.1;
      
      // Clan bonus
      if (user.clan && clanData[user.clan]) {
        const clan = clanData[user.clan];
        rate += (clan.buildings?.altar || 0) * 0.02;
      }
      
      // Item bonus
      if (user.items.ngoc) {
        user.items.ngoc--;
        rate += 0.2;
      }

      const roll = Math.random();
      
      if (roll < 0.05) {
        // Super breakthrough
        user.realm = this.realms[Math.min(index + 2, this.realms.length - 1)];
        user.exp -= reqExp;
        user.dokiepCount += 2;
        user.linhThach += 5;
        this.saveAllData(data);
        return api.sendMessage(`⚡️ ĐỘT PHÁ THẦN TỐC lên ${user.realm}! Bonus +5 Linh Thạch!`, threadID, messageID);
      }

      if (roll < rate) {
        user.realm = next;
        user.exp -= reqExp;
        user.dokiepCount++;
        user.linhThach += 2;
        
        // Clan contribution
        if (user.clan) {
          user.clanContribution += 50;
          clanData[user.clan].totalContribution = (clanData[user.clan].totalContribution || 0) + 50;
        }
        
        this.saveAllData(data);
        this.saveClanData(clanData);
        return api.sendMessage(`🌟 Độ kiếp thành công! Cảnh giới mới: ${next}`, threadID, messageID);
      } else {
        if (user.items.danphuc) {
          user.items.danphuc--;
          this.saveAllData(data);
          return api.sendMessage("🛡️ Được bảo vệ bởi Đan Hồi Phục. Không mất EXP.", threadID, messageID);
        }
        
        if (Math.random() < 0.3) {
          user.realm = this.realms[Math.max(0, index - 1)];
          user.theChat -= 10;
          this.saveAllData(data);
          return api.sendMessage("💥 Tẩu hỏa nhập ma! Bị giảm cảnh giới và thể chất!", threadID, messageID);
        }
        
        user.exp -= reqExp;
        this.saveAllData(data);
        return api.sendMessage("💥 Độ kiếp thất bại!", threadID, messageID);
      }
    }

    // Enhanced info display
    if (cmd === "info") {
      const targetID = Object.keys(event.mentions)[0] || senderID;
      const target = data[targetID];
      
      if (!target) return api.sendMessage("❌ Người này chưa tu tiên!", threadID, messageID);
      if (target.hideInfo && targetID !== senderID) {
        return api.sendMessage("🔒 Người này đang ẩn thông tin tu luyện.", threadID, messageID);
      }
      
      let msg = `👤 ${target.name}\n🌟 Cảnh giới: ${target.realm}\n✨ EXP: ${target.exp}\n💎 Linh Thạch: ${target.linhThach}\n💪 Thể chất: ${target.theChat}`;
      
      if (target.faction) msg += `\n☯️ Phái: ${this.factions[target.faction]}`;
      
      if (target.clan) {
        const role = this.clanRoles[target.clanRole]?.name || "🔷 Thành Viên";
        msg += `\n🏯 Clan: ${target.clan} (${role})`;
        msg += `\n🎯 Đóng góp: ${target.clanContribution}`;
      }
      
      if (target.petEquipped) msg += `\n🐾 Pet: ${target.petEquipped}`;
      
      msg += `\n📊 Thống kê: ${target.dokiepCount} độ kiếp | ${target.pvpWins} PvP thắng`;
      
      return api.sendMessage(msg, threadID, messageID);
    }

    // Clan system
    if (cmd === "clan") {
      const sub = args[1]?.toLowerCase();
      
      if (!sub) {
        if (!user.clan) {
          return api.sendMessage(`🏯 𝗖𝗟𝗔𝗡 𝗦𝗬𝗦𝗧𝗘𝗠\n━━━━━━━━━━━━\n` +
            `📝 Tạo clan: clan create <tên>\n` +
            `🚪 Vào clan: clan join <tên>\n` +
            `📋 Danh sách: clan list\n` +
            `🔍 Tìm kiếm: clan search <tên>`, threadID, messageID);
        } else {
          const clan = clanData[user.clan];
          if (!clan) {
            user.clan = null;
            user.clanRole = "member";
            this.saveAllData(data);
            return api.sendMessage("❌ Clan không tồn tại. Đã rời clan.", threadID, messageID);
          }
          
          const memberCount = Object.values(data).filter(u => u.clan === user.clan).length;
          let msg = `🏯 ${clan.name}\n👑 Bang chủ: ${clan.leader}\n👥 Thành viên: ${memberCount}/${clan.maxMembers || 20}\n`;
          msg += `💰 Kho bạc: ${clan.treasury || 0} LT\n🎯 Tổng đóng góp: ${clan.totalContribution || 0}\n`;
          msg += `📈 Level: ${clan.level || 1}\n📜 Mô tả: ${clan.description || "Chưa có mô tả"}`;
          
          return api.sendMessage(msg, threadID, messageID);
        }
      }
      
      if (sub === "create") {
        if (user.clan) return api.sendMessage("❌ Bạn đã ở trong clan rồi!", threadID, messageID);
        
        const name = args.slice(2).join(" ");
        if (!name) return api.sendMessage("❌ Vui lòng nhập tên clan!", threadID, messageID);
        if (name.length > 20) return api.sendMessage("❌ Tên clan tối đa 20 ký tự!", threadID, messageID);
        if (clanData[name]) return api.sendMessage("❌ Tên clan đã tồn tại!", threadID, messageID);
        if (user.linhThach < 100) return api.sendMessage("❌ Cần 100 Linh Thạch để tạo clan!", threadID, messageID);
        
        user.linhThach -= 100;
        user.clan = name;
        user.clanRole = "leader";
        
        clanData[name] = {
          name: name,
          leader: user.name,
          created: Date.now(),
          level: 1,
          treasury: 0,
          totalContribution: 0,
          maxMembers: 20,
          description: "",
          buildings: {
            training: 0,
            library: 0,
            treasury: 0,
            altar: 0
          }
        };
        
        this.saveAllData(data);
        this.saveClanData(clanData);
        return api.sendMessage(`🎉 Đã tạo clan "${name}" thành công! Bạn là bang chủ.`, threadID, messageID);
      }
      
      if (sub === "join") {
        if (user.clan) return api.sendMessage("❌ Bạn đã ở trong clan rồi!", threadID, messageID);
        
        const name = args.slice(2).join(" ");
        if (!name) return api.sendMessage("❌ Vui lòng nhập tên clan!", threadID, messageID);
        if (!clanData[name]) return api.sendMessage("❌ Clan không tồn tại!", threadID, messageID);
        
        const clan = clanData[name];
        const memberCount = Object.values(data).filter(u => u.clan === name).length;
        
        if (memberCount >= (clan.maxMembers || 20)) {
          return api.sendMessage("❌ Clan đã đầy!", threadID, messageID);
        }
        
        user.clan = name;
        user.clanRole = "member";
        user.clanContribution = 0;
        
        this.saveAllData(data);
        return api.sendMessage(`🎉 Đã gia nhập clan "${name}" thành công!`, threadID, messageID);
      }
      
      if (sub === "leave") {
        if (!user.clan) return api.sendMessage("❌ Bạn không ở trong clan nào!", threadID, messageID);
        
        if (user.clanRole === "leader") {
          return api.sendMessage("❌ Bang chủ không thể rời clan! Hãy chuyển quyền hoặc giải tán clan.", threadID, messageID);
        }
        
        const oldClan = user.clan;
        user.clan = null;
        user.clanRole = "member";
        user.clanContribution = 0;
        
        this.saveAllData(data);
        return api.sendMessage(`🚪 Đã rời clan "${oldClan}".`, threadID, messageID);
      }
      
      if (sub === "list") {
        const clans = Object.values(clanData)
          .sort((a, b) => (b.totalContribution || 0) - (a.totalContribution || 0))
          .slice(0, 10);
        
        if (clans.length === 0) {
          return api.sendMessage("📝 Chưa có clan nào được tạo!", threadID, messageID);
        }
        
        let msg = "🏯 𝗧𝗢𝗣 𝗖𝗟𝗔𝗡\n━━━━━━━━━━━━\n";
        clans.forEach((clan, i) => {
          const memberCount = Object.values(data).filter(u => u.clan === clan.name).length;
          msg += `${i + 1}. ${clan.name} | Lv.${clan.level || 1} | ${memberCount} thành viên\n`;
        });
        
        return api.sendMessage(msg, threadID, messageID);
      }
      
      if (sub === "upgrade") {
        if (!user.clan) return api.sendMessage("❌ Bạn không ở trong clan nào!", threadID, messageID);
        
        const userRole = this.clanRoles[user.clanRole];
        if (userRole.level < 2) return api.sendMessage("❌ Chỉ Phó Bang Chủ trở lên mới có thể nâng cấp!", threadID, messageID);
        
        const building = args[2]?.toLowerCase();
        if (!this.clanBuildings[building]) {
          return api.sendMessage("❌ Dùng: clan upgrade training|library|treasury|altar", threadID, messageID);
        }
        
        const clan = clanData[user.clan];
        const currentLevel = clan.buildings[building] || 0;
        const maxLevel = this.clanBuildings[building].maxLevel;
        
        if (currentLevel >= maxLevel) {
          return api.sendMessage(`❌ ${this.clanBuildings[building].name} đã ở level tối đa!`, threadID, messageID);
        }
        
        const cost = this.clanBuildings[building].baseCost * (currentLevel + 1);
        if (clan.treasury < cost) {
          return api.sendMessage(`❌ Kho bạc clan cần ${cost} Linh Thạch để nâng cấp!`, threadID, messageID);
        }
        
        clan.treasury -= cost;
        clan.buildings[building]++;
        
        this.saveClanData(clanData);
        return api.sendMessage(`🔧 Đã nâng cấp ${this.clanBuildings[building].name} lên level ${clan.buildings[building]}!`, threadID, messageID);
      }
      
      if (sub === "donate") {
        if (!user.clan) return api.sendMessage("❌ Bạn không ở trong clan nào!", threadID, messageID);
        
        const amount = parseInt(args[2]);
        if (!amount || amount <= 0) return api.sendMessage("❌ Số lượng không hợp lệ!", threadID, messageID);
        if (user.linhThach < amount) return api.sendMessage("❌ Không đủ Linh Thạch!", threadID, messageID);
        
        user.linhThach -= amount;
        user.clanContribution += amount;
        
        const clan = clanData[user.clan];
        clan.treasury = (clan.treasury || 0) + amount;
        clan.totalContribution = (clan.totalContribution || 0) + amount;
        
        this.saveAllData(data);
        this.saveClanData(clanData);
        
        return api.sendMessage(`💰 Đã donate ${amount} Linh Thạch cho clan!`, threadID, messageID);
      }
    }

    // Faction selection (preserved)
    if (cmd === "phai") {
      if (user.faction) return api.sendMessage("☯️ Bạn đã chọn phái, không thể thay đổi.", threadID, messageID);
      const pick = args[1]?.toLowerCase();
      if (!["tien", "ma", "phat", "hachan"].includes(pick))
        return api.sendMessage("☯️ Dùng: phai tien | ma | phat | hachan", threadID, messageID);
      user.faction = pick;
      this.saveAllData(data);
      return api.sendMessage(`☯️ Bạn đã gia nhập ${this.factions[pick]}`, threadID, messageID);
    }

    // Enhanced shop with clan items
    if (cmd === "shop") {
      let msg = "🛒 Shop Tu Tiên:\n━━━━━━━━━━━━\n";
      for (const [code, item] of Object.entries(this.items)) {
        msg += `• ${code}: ${item.name} (${item.price} LT)\n  ${item.effect}\n\n`;
      }
      return api.sendMessage(msg.trim(), threadID, messageID);
    }

    if (cmd === "buy") {
      const code = args[1];
      if (!this.items[code]) return api.sendMessage("❌ Mã vật phẩm không hợp lệ.", threadID, messageID);
      const item = this.items[code];
      if (user.linhThach < item.price) return api.sendMessage("❌ Không đủ Linh Thạch.", threadID, messageID);
      user.linhThach -= item.price;
      user.items[code] = (user.items[code] || 0) + 1;
      this.saveAllData(data);
      return api.sendMessage(`✅ Đã mua 1 ${item.name}.`, threadID, messageID);
    }

    if (cmd === "use") {
      const code = args[1];
      if (!this.items[code] || !user.items[code]) return api.sendMessage("❌ Bạn không có vật phẩm này.", threadID, messageID);
      user.items[code]--;
      
      if (code === "danexp") user.exp += 1000;
      if (code === "thechat") user.theChat += Math.floor(Math.random() * 11) + 10;
      if (code === "petbox") {
        const pet = this.generatePetWithRarity();
        const rarityColor = this.petRarities[pet.rarity].color;
        pet.id = Date.now() + Math.random(); // Generate unique ID
        user.petCollection.push(pet);
        user.petPoints += this.petRarities[pet.rarity].statMultiplier * 10;
        this.saveAllData(data);
        return api.sendMessage(`🎯 Đã dùng ${this.items[code].name}\n🐾 Bạn nhận được: ${rarityColor} ${pet.name} (${this.petRarities[pet.rarity].name})\n⚔️ ATK: ${pet.attack} | 🛡️ DEF: ${pet.defense} | 💨 SPD: ${pet.speed}`, threadID, messageID);
      }
      
      // New battle items
      if (code === "energy") {
        user.battleEnergy = Math.min(100, user.battleEnergy + 50);
        this.saveAllData(data);
        return api.sendMessage(`⚡ Đã dùng ${this.items[code].name}\nNăng lượng hiện tại: ${user.battleEnergy}/100`, threadID, messageID);
      }
      
      if (code === "skillbook") {
        const skills = Object.keys(user.battleSkills);
        const availableSkills = skills.filter(skill => user.battleSkills[skill] < 5);
        if (availableSkills.length === 0) {
          this.saveAllData(data);
          return api.sendMessage("📖 Tất cả kỹ năng đã đạt cấp tối đa!", threadID, messageID);
        }
        const randomSkill = availableSkills[Math.floor(Math.random() * availableSkills.length)];
        user.battleSkills[randomSkill]++;
        this.saveAllData(data);
        return api.sendMessage(`🎯 Đã dùng ${this.items[code].name}\n🔥 Kỹ năng ${this.battleSkills[randomSkill].name} tăng lên level ${user.battleSkills[randomSkill]}!`, threadID, messageID);
      }
      
      if (code === "petfood") {
        if (!user.petEquipped) {
          this.saveAllData(data);
          return api.sendMessage("❌ Hãy trang bị pet trước khi sử dụng!", threadID, messageID);
        }
        const pet = user.petCollection.find(p => p.id === user.petEquipped);
        if (!pet) {
          this.saveAllData(data);
          return api.sendMessage("❌ Pet không tồn tại!", threadID, messageID);
        }
        const expGain = 200 + (pet.level * 50);
        pet.exp += expGain;
        
        // Level up check
        const expNeeded = pet.level * 1000;
        if (pet.exp >= expNeeded && pet.level < 10) {
          pet.level++;
          pet.exp -= expNeeded;
          pet.attack = Math.floor(pet.attack * 1.1);
          pet.defense = Math.floor(pet.defense * 1.1);
          pet.speed = Math.floor(pet.speed * 1.1);
          this.saveAllData(data);
          return api.sendMessage(`🎯 Đã dùng ${this.items[code].name}\n🔥 ${pet.name} lên level ${pet.level}! Tất cả chỉ số tăng 10%!`, threadID, messageID);
        }
        
        this.saveAllData(data);
        return api.sendMessage(`🎯 Đã dùng ${this.items[code].name}\n🐾 ${pet.name} nhận ${expGain} EXP (${pet.exp}/${pet.level * 1000})`, threadID, messageID);
      }
      
      if (code === "clanbuff" && user.clan) {
        const clan = clanData[user.clan];
        clan.buffExpire = Date.now() + 3600000; // 1 hour
        this.saveClanData(clanData);
        return api.sendMessage("⚡ Đã kích hoạt buff EXP cho clan trong 1 giờ!", threadID, messageID);
      }
      
      this.saveAllData(data);
      return api.sendMessage(`🎯 Đã dùng ${this.items[code].name}`, threadID, messageID);
    }

    if (cmd === "inv") {
      const inv = user.items || {};
      if (!Object.keys(inv).length) return api.sendMessage("🎒 Kho đồ trống.", threadID, messageID);
      let msg = "🎒 Kho đồ:\n━━━━━━━━━━━━\n";
      for (const [code, count] of Object.entries(inv)) {
        if (count > 0) {
          msg += `• ${this.items[code]?.name || code}: ${count}\n`;
        }
      }
      return api.sendMessage(msg.trim(), threadID, messageID);
    }

    // Enhanced pet system with rarity and equipment
    if (cmd === "pet") {
      const sub = args[1];
      if (!sub) {
        if (!user.petEquipped) {
          return api.sendMessage("🐾 Bạn chưa có pet, hãy dùng `use petbox` để mở!\n📚 Hướng dẫn: pet list | pet equip <id> | pet info | pet shop | pet upgrade", threadID, messageID);
        }
        const pet = user.petCollection.find(p => p.id === user.petEquipped);
        if (!pet) {
          user.petEquipped = null;
          this.saveAllData(data);
          return api.sendMessage("❌ Pet không tồn tại. Đã bỏ trang bị.", threadID, messageID);
        }
        const rarityColor = this.petRarities[pet.rarity].color;
        const power = this.calculatePetPower(pet);
        return api.sendMessage(`🐾 ${rarityColor} ${pet.name} (Lv.${pet.level})\n⚔️ ATK: ${pet.attack} | 🛡️ DEF: ${pet.defense} | 💨 SPD: ${pet.speed}\n💪 Sức mạnh: ${power} | ⚡ Element: ${pet.element}`, threadID, messageID);
      }
      
      if (sub === "list" || sub === "inv") {
        if (!user.petCollection || user.petCollection.length === 0)
          return api.sendMessage("🎒 Bạn chưa có pet nào!", threadID, messageID);
        
        let msg = "🎒 𝗖𝗢𝗟𝗟𝗘𝗖𝗧𝗜𝗢𝗡 𝗣𝗘𝗧\n━━━━━━━━━━━━━━━━\n";
        user.petCollection.forEach((pet, i) => {
          const rarityColor = this.petRarities[pet.rarity].color;
          const equipped = user.petEquipped === pet.id ? " ✅" : "";
          msg += `${i + 1}. ${rarityColor} ${pet.name} (Lv.${pet.level})${equipped}\n`;
          msg += `   ⚔️${pet.attack} 🛡️${pet.defense} 💨${pet.speed} | ${pet.element}\n\n`;
        });
        return api.sendMessage(msg.trim(), threadID, messageID);
      }
      
      if (sub === "equip") {
        const index = parseInt(args[2]) - 1;
        if (isNaN(index) || !user.petCollection[index])
          return api.sendMessage("❌ ID pet không hợp lệ! Dùng `pet list` để xem danh sách.", threadID, messageID);
        
        const pet = user.petCollection[index];
        if (!pet.id) pet.id = Date.now() + Math.random(); // Generate ID if missing
        user.petEquipped = pet.id;
        this.saveAllData(data);
        
        const rarityColor = this.petRarities[pet.rarity].color;
        return api.sendMessage(`✅ Đã trang bị: ${rarityColor} ${pet.name} (Lv.${pet.level})`, threadID, messageID);
      }
      
      if (sub === "info") {
        const index = parseInt(args[2]) - 1;
        let pet;
        
        if (isNaN(index)) {
          if (!user.petEquipped) return api.sendMessage("🐾 Bạn chưa trang bị pet nào.", threadID, messageID);
          pet = user.petCollection.find(p => p.id === user.petEquipped);
        } else {
          pet = user.petCollection[index];
        }
        
        if (!pet) return api.sendMessage("❌ Pet không tồn tại!", threadID, messageID);
        
        const rarityColor = this.petRarities[pet.rarity].color;
        const power = this.calculatePetPower(pet);
        let msg = `📋 ${rarityColor} ${pet.name} (${this.petRarities[pet.rarity].name})\n`;
        msg += `🔥 Level: ${pet.level} | 💫 EXP: ${pet.exp}\n`;
        msg += `⚔️ ATK: ${pet.attack} | 🛡️ DEF: ${pet.defense} | 💨 SPD: ${pet.speed}\n`;
        msg += `⚡ Element: ${pet.element} | 💪 Sức mạnh: ${power}\n\n`;
        msg += `🎯 Trang bị:\n`;
        msg += `⚔️ Vũ khí: ${pet.equipment.weapon || "Chưa có"}\n`;
        msg += `🛡️ Giáp: ${pet.equipment.armor || "Chưa có"}\n`;
        msg += `💍 Phụ kiện: ${pet.equipment.accessory || "Chưa có"}`;
        
        return api.sendMessage(msg, threadID, messageID);
      }
      
      if (sub === "shop") {
        let msg = "🏪 𝗣𝗘𝗧 𝗘𝗤𝗨𝗜𝗣𝗠𝗘𝗡𝗧 𝗦𝗛𝗢𝗣\n━━━━━━━━━━━━━━━━━━━━━━\n";
        
        ["weapon", "armor", "accessory"].forEach(type => {
          const typeName = type === "weapon" ? "⚔️ VŨ KHÍ" : type === "armor" ? "🛡️ GIÁP" : "💍 PHỤ KIỆN";
          msg += `\n${typeName}:\n`;
          Object.entries(this.petEquipment[type]).forEach(([name, item]) => {
            const rarity = this.petRarities[item.rarity].color;
            msg += `• ${rarity} ${name} - ${item.price} LT\n`;
            if (item.attack) msg += `  ⚔️ +${item.attack} ATK`;
            if (item.defense) msg += `  🛡️ +${item.defense} DEF`;
            if (item.speed) msg += `  💨 +${item.speed} SPD`;
            msg += "\n";
          });
        });
        
        msg += "\n📝 Dùng: pet buy <tên trang bị>";
        return api.sendMessage(msg, threadID, messageID);
      }
      
      if (sub === "buy") {
        const itemName = args.slice(2).join(" ");
        const allEquipment = this.getAllEquipment();
        const item = allEquipment[itemName];
        
        if (!item) return api.sendMessage("❌ Trang bị không tồn tại! Dùng `pet shop` để xem danh sách.", threadID, messageID);
        if (user.linhThach < item.price) return api.sendMessage(`❌ Không đủ Linh Thạch! Cần ${item.price} LT.`, threadID, messageID);
        
        user.linhThach -= item.price;
        
        // Determine equipment type
        let type = null;
        Object.entries(this.petEquipment).forEach(([t, items]) => {
          if (items[itemName]) type = t;
        });
        
        user.petStorage[type].push(itemName);
        this.saveAllData(data);
        
        const rarity = this.petRarities[item.rarity].color;
        return api.sendMessage(`✅ Đã mua ${rarity} ${itemName}! Vào kho trang bị pet.`, threadID, messageID);
      }
      
      if (sub === "equip_item") {
        if (!user.petEquipped) return api.sendMessage("❌ Hãy trang bị pet trước!", threadID, messageID);
        
        const itemName = args.slice(2).join(" ");
        const allEquipment = this.getAllEquipment();
        const item = allEquipment[itemName];
        
        if (!item) return api.sendMessage("❌ Trang bị không tồn tại!", threadID, messageID);
        
        // Find equipment type
        let type = null;
        Object.entries(this.petEquipment).forEach(([t, items]) => {
          if (items[itemName]) type = t;
        });
        
        if (!user.petStorage[type].includes(itemName)) {
          return api.sendMessage("❌ Bạn không sở hữu trang bị này!", threadID, messageID);
        }
        
        const pet = user.petCollection.find(p => p.id === user.petEquipped);
        if (!pet) return api.sendMessage("❌ Pet không tồn tại!", threadID, messageID);
        
        // Unequip current item if any
        if (pet.equipment[type]) {
          user.petStorage[type].push(pet.equipment[type]);
        }
        
        // Equip new item
        pet.equipment[type] = itemName;
        user.petStorage[type] = user.petStorage[type].filter(i => i !== itemName);
        
        this.saveAllData(data);
        
        const rarity = this.petRarities[item.rarity].color;
        return api.sendMessage(`✅ Đã trang bị ${rarity} ${itemName} cho ${pet.name}!`, threadID, messageID);
      }
      
      if (sub === "storage") {
        let msg = "🎒 𝗞𝗛𝗢 𝗧𝗥𝗔𝗡𝗚 𝗕𝗜̣ 𝗣𝗘𝗧\n━━━━━━━━━━━━━━━━━\n";
        
        ["weapon", "armor", "accessory"].forEach(type => {
          const typeName = type === "weapon" ? "⚔️ VŨ KHÍ" : type === "armor" ? "🛡️ GIÁP" : "💍 PHỤ KIỆN";
          msg += `\n${typeName}:\n`;
          
          if (user.petStorage[type].length === 0) {
            msg += "• Trống\n";
          } else {
            user.petStorage[type].forEach(itemName => {
              const item = this.getAllEquipment()[itemName];
              const rarity = this.petRarities[item.rarity].color;
              msg += `• ${rarity} ${itemName}\n`;
            });
          }
        });
        
        msg += "\n📝 Dùng: pet equip_item <tên trang bị>";
        return api.sendMessage(msg, threadID, messageID);
      }
    }

    // Enhanced Battle System
    if (cmd === "battle" || cmd === "dph") {
      const sub = args[1]?.toLowerCase();
      
      if (!sub) {
        let msg = "⚔️ 𝗛𝗘̣̂ 𝗧𝗛𝗢̂́𝗡𝗚 Đ𝗔̂́𝗨 𝗣𝗛𝗔́\n━━━━━━━━━━━━━━━━━━━━\n";
        msg += "🏟️ arena - Đấu trường (10 phút)\n";
        msg += "🏆 tournament - Giải đấu (30 phút)\n";
        msg += "⚔️ clanwar - Chiến tranh clan (60 phút)\n";
        msg += "💥 challenge @user - Thách đấu người chơi\n";
        msg += "🎯 skills - Xem kỹ năng chiến đấu\n";
        msg += "📊 stats - Thống kê chiến đấu\n\n";
        msg += `⚡ Năng lượng: ${user.battleEnergy}/100`;
        return api.sendMessage(msg, threadID, messageID);
      }
      
      if (sub === "arena" || sub === "tournament" || sub === "clanwar") {
        const battleType = this.battleTypes[sub];
        const now = Date.now();
        
        if (user.battleCooldowns[sub] && now - user.battleCooldowns[sub] < battleType.cooldown) {
          const left = Math.ceil((battleType.cooldown - (now - user.battleCooldowns[sub])) / 60000);
          return api.sendMessage(`⏱️ Còn ${left} phút nữa mới có thể tham gia ${battleType.name}.`, threadID, messageID);
        }
        
        if (user.battleEnergy < 20) {
          return api.sendMessage("❌ Không đủ năng lượng! Cần tối thiểu 20 năng lượng.", threadID, messageID);
        }
        
        // Clan war requires clan membership
        if (sub === "clanwar" && !user.clan) {
          return api.sendMessage("❌ Cần gia nhập clan để tham gia chiến tranh!", threadID, messageID);
        }
        
        user.battleEnergy -= 20;
        user.battleCooldowns[sub] = now;
        
        // Calculate battle power
        let userPower = this.realms.indexOf(user.realm) * 100 + user.theChat;
        
        // Add pet power
        if (user.petEquipped) {
          const pet = user.petCollection.find(p => p.id === user.petEquipped);
          if (pet) {
            userPower += this.calculatePetPower(pet);
          }
        }
        
        // Add skill bonuses
        Object.entries(user.battleSkills).forEach(([skill, level]) => {
          userPower += level * 10;
        });
        
        // Simulate opponent
        const opponentPower = userPower * (0.8 + Math.random() * 0.4);
        const userRoll = Math.random() * 100;
        const opponentRoll = Math.random() * 100;
        
        const userTotal = userPower + userRoll;
        const opponentTotal = opponentPower + opponentRoll;
        
        let result = "";
        if (userTotal > opponentTotal) {
          // Victory
          user.exp += battleType.reward.exp;
          user.linhThach += battleType.reward.lt;
          user.battleWins[sub]++;
          user.battleEnergy = Math.min(100, user.battleEnergy + 10);
          
          result = `🏆 THẮNG! Nhận ${battleType.reward.exp} EXP + ${battleType.reward.lt} LT\n`;
          result += `⚡ +10 năng lượng chiến đấu`;
          
          // Skill upgrade chance
          if (Math.random() < 0.3) {
            const skills = Object.keys(user.battleSkills);
            const randomSkill = skills[Math.floor(Math.random() * skills.length)];
            if (user.battleSkills[randomSkill] < 5) {
              user.battleSkills[randomSkill]++;
              result += `\n🔥 Kỹ năng ${this.battleSkills[randomSkill].name} tăng lên level ${user.battleSkills[randomSkill]}!`;
            }
          }
        } else {
          // Defeat
          const consolationExp = Math.floor(battleType.reward.exp * 0.3);
          user.exp += consolationExp;
          result = `💥 THUA! Nhận ${consolationExp} EXP an ủi`;
        }
        
        this.saveAllData(data);
        return api.sendMessage(`${battleType.name}\n${result}`, threadID, messageID);
      }
      
      if (sub === "challenge") {
        const targetID = Object.keys(event.mentions)[0];
        if (!targetID) return api.sendMessage("❌ Vui lòng tag đối thủ!", threadID, messageID);
        if (targetID === senderID) return api.sendMessage("❌ Không thể tự thách đấu bản thân!", threadID, messageID);
        
        const target = data[targetID];
        if (!target) return api.sendMessage("❌ Đối thủ chưa tu tiên!", threadID, messageID);
        
        const now = Date.now();
        if (user.battleCooldowns.challenge && now - user.battleCooldowns.challenge < 300000) {
          const left = Math.ceil((300000 - (now - user.battleCooldowns.challenge)) / 1000);
          return api.sendMessage(`⏱️ Còn ${left}s nữa mới có thể thách đấu.`, threadID, messageID);
        }
        
        if (user.battleEnergy < 10) {
          return api.sendMessage("❌ Không đủ năng lượng! Cần tối thiểu 10 năng lượng.", threadID, messageID);
        }
        
        user.battleEnergy -= 10;
        user.battleCooldowns.challenge = now;
        
        // Calculate powers with pets and equipment
        let userPower = this.realms.indexOf(user.realm) * 100 + user.theChat;
        let targetPower = this.realms.indexOf(target.realm) * 100 + target.theChat;
        
        // Add pet powers
        if (user.petEquipped) {
          const pet = user.petCollection?.find(p => p.id === user.petEquipped);
          if (pet) userPower += this.calculatePetPower(pet);
        }
        
        if (target.petEquipped) {
          const pet = target.petCollection?.find(p => p.id === target.petEquipped);
          if (pet) targetPower += this.calculatePetPower(pet);
        }
        
        const userRoll = Math.random() * 50;
        const targetRoll = Math.random() * 50;
        const userTotal = userPower + userRoll;
        const targetTotal = targetPower + targetRoll;
        
        let resultMsg = "";
        if (userTotal > targetTotal) {
          const expGain = Math.floor(targetPower / 2);
          resultMsg = `🏆 Bạn đã thắng ${target.name}! Nhận ${expGain} EXP + 2 LT.`;
          user.exp += expGain;
          user.linhThach += 2;
          user.battleWins.challenge++;
          target.theChat = Math.max(10, target.theChat - 3);
        } else if (userTotal < targetTotal) {
          const expGain = Math.floor(userPower / 4);
          resultMsg = `💥 Bạn bị ${target.name} đánh bại! Nhận ${expGain} EXP.`;
          user.exp += expGain;
          user.theChat = Math.max(10, user.theChat - 3);
        } else {
          const expGain = Math.floor(userPower / 3);
          resultMsg = `🤝 Hòa với ${target.name}! Cả hai nhận ${expGain} EXP.`;
          user.exp += expGain;
          target.exp += expGain;
        }
        
        this.saveAllData(data);
        return api.sendMessage(resultMsg, threadID, messageID);
      }
      
      if (sub === "skills") {
        let msg = "🎯 𝗞𝗬̃ 𝗡𝗔̆𝗡𝗚 𝗖𝗛𝗜𝗘̂́𝗡 Đ𝗔̂́𝗨\n━━━━━━━━━━━━━━━━━━\n";
        Object.entries(user.battleSkills).forEach(([skill, level]) => {
          const skillData = this.battleSkills[skill];
          if (skillData) {
            msg += `${skillData.name} - Level ${level}/5\n`;
            if (skillData.damage) msg += `  🗡️ Sát thương: x${skillData.damage}\n`;
            if (skillData.defense) msg += `  🛡️ Phòng thủ: x${skillData.defense}\n`;
            if (skillData.speed) msg += `  💨 Tốc độ: x${skillData.speed}\n`;
            if (skillData.heal) msg += `  ❤️ Hồi phục: ${skillData.heal * 100}%\n`;
            msg += "\n";
          }
        });
        
        msg += `⚡ Năng lượng: ${user.battleEnergy}/100\n`;
        msg += "💡 Kỹ năng tăng ngẫu nhiên khi thắng trận!";
        return api.sendMessage(msg, threadID, messageID);
      }
      
      if (sub === "stats") {
        let msg = "📊 𝗧𝗛𝗢̂́𝗡𝗚 𝗞𝗘̂ 𝗖𝗛𝗜𝗘̂́𝗡 Đ𝗔̂́𝗨\n━━━━━━━━━━━━━━━━━━━━\n";
        msg += `🏟️ Đấu trường: ${user.battleWins.arena || 0} thắng\n`;
        msg += `🏆 Giải đấu: ${user.battleWins.tournament || 0} thắng\n`;
        msg += `⚔️ Chiến tranh clan: ${user.battleWins.clanwar || 0} thắng\n`;
        msg += `💥 Thách đấu: ${user.battleWins.challenge || 0} thắng\n\n`;
        
        const totalWins = Object.values(user.battleWins).reduce((a, b) => a + b, 0);
        msg += `🏅 Tổng thắng: ${totalWins}\n`;
        msg += `⚡ Năng lượng: ${user.battleEnergy}/100`;
        
        return api.sendMessage(msg, threadID, messageID);
      }
    }

    // Enhanced PvP system
    if (cmd === "pvp") {
      const now = Date.now();
      if (now - user.pvpCooldown < 300000) {
        const left = Math.ceil((300000 - (now - user.pvpCooldown)) / 1000);
        return api.sendMessage(`⏱️ Chờ ${left}s để thách đấu tiếp.`, threadID, messageID);
      }

      const targetID = Object.keys(event.mentions)[0];
      if (!targetID) return api.sendMessage("❌ Vui lòng tag đối thủ!", threadID, messageID);
      if (targetID === senderID) return api.sendMessage("❌ Không thể tự đánh bản thân!", threadID, messageID);

      const target = data[targetID];
      if (!target) return api.sendMessage("❌ Đối thủ chưa tu tiên!", threadID, messageID);

      let userPower = this.realms.indexOf(user.realm) * 100 + user.theChat;
      let targetPower = this.realms.indexOf(target.realm) * 100 + target.theChat;

      // Clan bonuses
      if (user.clan && clanData[user.clan]) {
        userPower += clanData[user.clan].buildings?.training || 0 * 10;
      }
      if (target.clan && clanData[target.clan]) {
        targetPower += clanData[target.clan].buildings?.training || 0 * 10;
      }

      const userRoll = Math.random() * 50;
      const targetRoll = Math.random() * 50;
      const userTotal = userPower + userRoll;
      const targetTotal = targetPower + targetRoll;

      let resultMsg = "", expGain = 0;
      if (userTotal > targetTotal) {
        expGain = Math.floor(targetPower / 2);
        resultMsg = `⚔️ Bạn đã đánh bại ${target.name}! Nhận ${expGain} EXP + 1 Linh Thạch.`;
        user.exp += expGain;
        user.pvpWins++;
        user.linhThach += 1;
        target.theChat = Math.max(10, target.theChat - 5);
      } else if (userTotal < targetTotal) {
        expGain = Math.floor(userPower / 4);
        resultMsg = `💥 Bạn bị ${target.name} đánh bại! Nhận ${expGain} EXP từ chiến bại.`;
        user.exp += expGain;
        user.theChat = Math.max(10, user.theChat - 5);
      } else {
        expGain = Math.floor(userPower / 3);
        resultMsg = `🤝 Hòa với ${target.name}! Cả hai nhận ${expGain} EXP.`;
        user.exp += expGain;
        target.exp += expGain;
      }

      user.pvpCooldown = now;
      this.saveAllData(data);
      return api.sendMessage(resultMsg, threadID, messageID);
    }

    // Enhanced quest system
    if (cmd === "quest") {
      const today = new Date().toDateString();
      if (!user.dailyQuest || user.dailyQuest.date !== today) {
        const types = ["train", "dokiep", "boss", "clan"];
        const rand = types[Math.floor(Math.random() * types.length)];
        const target = rand === "boss" ? 1 : (rand === "clan" ? 5 : 3);
        user.dailyQuest = { type: rand, progress: 0, target, date: today };
      }

      const q = user.dailyQuest;
      q.progress = q.progress || 0;
      q.target = q.target || 1;
      const done = q.progress >= q.target;
      const percent = Math.floor((q.progress / q.target) * 100);

      let msg = `🎯 Nhiệm vụ hôm nay: ${q.type.toUpperCase()}\nTiến độ: ${q.progress}/${q.target} (${percent}%)`;
      if (done) {
        const reward = q.type === "clan" ? 5 : 2;
        user.linhThach += reward;
        user.exp += 500;
        msg += `\n✅ Đã hoàn thành! +500 EXP +${reward} LT`;
        delete user.dailyQuest;
      }

      this.saveAllData(data);
      return api.sendMessage(msg, threadID, messageID);
    }

    // Enhanced dungeon system
    if (cmd === "dungeon") {
      const list = [
        { name: "Hang Nhện", level: 1, reward: 300 },
        { name: "Lâu Đài Bóng Tối", level: 2, reward: 600 },
        { name: "Động Băng Huyết", level: 3, reward: 1000 },
        { name: "Tháp Tu Luyện", level: 4, reward: 1500 },
        { name: "Cung Điện Ma Vương", level: 5, reward: 2000 }
      ];
      const pick = list[Math.floor(Math.random() * list.length)];
      
      let successRate = 0.6;
      if (user.clan && clanData[user.clan]) {
        successRate += (clanData[user.clan].buildings?.library || 0) * 0.05;
      }
      
      const pass = Math.random() < successRate;
      let msg = `🏰 Dungeon: ${pick.name}\n🔥 Độ khó: ${pick.level}`;
      
      if (pass) {
        user.exp += pick.reward;
        user.linhThach += Math.floor(pick.level / 2);
        msg += `\n✅ Thành công! Nhận ${pick.reward} EXP + ${Math.floor(pick.level / 2)} LT.`;
      } else {
        user.theChat -= 10;
        msg += `\n💀 Thất bại! Mất 10 thể chất.`;
      }
      this.saveAllData(data);
      return api.sendMessage(msg, threadID, messageID);
    }

    // Enhanced top system
    if (cmd === "top") {
      const top = Object.values(data)
        .filter(u => !u.hideInfo)
        .sort((a, b) => b.exp - a.exp)
        .slice(0, 10);
      let msg = "🏆 𝗧𝗢𝗣 𝗧𝗨 𝗧𝗜Ê𝗡\n━━━━━━━━━━━━\n";
      top.forEach((u, i) => {
        const clan = u.clan ? ` [${u.clan}]` : "";
        msg += `${i + 1}. ${u.name}${clan}\n🌟 ${u.realm} | ✨ ${u.exp} EXP\n\n`;
      });
      return api.sendMessage(msg, threadID, messageID);
    }

    // Clan top
    if (cmd === "clantop") {
      const clans = Object.values(clanData)
        .sort((a, b) => (b.totalContribution || 0) - (a.totalContribution || 0))
        .slice(0, 10);
      
      if (clans.length === 0) {
        return api.sendMessage("📝 Chưa có clan nào được tạo!", threadID, messageID);
      }
      
      let msg = "🏯 𝗧𝗢𝗣 𝗖𝗟𝗔𝗡\n━━━━━━━━━━━━\n";
      clans.forEach((clan, i) => {
        const memberCount = Object.values(data).filter(u => u.clan === clan.name).length;
        msg += `${i + 1}. ${clan.name}\n👑 ${clan.leader} | 👥 ${memberCount} thành viên\n🎯 ${clan.totalContribution || 0} đóng góp\n\n`;
      });
      
      return api.sendMessage(msg, threadID, messageID);
    }

    if (cmd === "hide") {
      user.hideInfo = !user.hideInfo;
      this.saveAllData(data);
      return api.sendMessage(user.hideInfo ? "🔒 Đã bật ẩn thông tin." : "🔓 Đã tắt ẩn thông tin.", threadID, messageID);
    }

    // Enhanced boss system
    if (cmd === "boss") {
      const boss = this.getBossData();
      if (!boss) return api.sendMessage("⚠️ Lỗi tải boss!", threadID, messageID);
      if (boss.defeated) return api.sendMessage("🐉 Boss đã bị tiêu diệt! Chờ boss mới...", threadID, messageID);

      let dmg = Math.floor(Math.random() * 201) + 100;
      
      // Clan bonuses
      if (user.clan && clanData[user.clan]) {
        const clan = clanData[user.clan];
        dmg = Math.floor(dmg * (1 + (clan.buildings?.altar || 0) * 0.1));
      }
      
      boss.hp -= dmg;
      boss.damage[senderID] = (boss.damage[senderID] || 0) + dmg;
      user.bossDamage += dmg;

      let msg = `🐲 Bạn đánh ${boss.name} gây ${dmg} sát thương!\n${boss.name} còn ${Math.max(0, boss.hp)} HP.`;

      if (boss.hp <= 0) {
        boss.defeated = true;
        boss.defeatTime = Date.now();
        const sorted = Object.entries(boss.damage).sort((a, b) => b[1] - a[1]);
        const top = sorted.slice(0, 5);
        
        for (const [uid, val] of sorted) {
          if (!data[uid]) continue;
          const reward = Math.floor(val / 10);
          data[uid].exp += reward;
          data[uid].linhThach += Math.floor(reward / 100);
        }
        
        msg += `\n\n🏆 ${boss.name} bị tiêu diệt! Top sát thương:\n`;
        top.forEach(([uid, dmg], i) => {
          const name = data[uid]?.hideInfo ? `Ẩn danh` : (data[uid]?.name || "Ẩn");
          msg += `${i + 1}. ${name} - ${dmg} sát thương\n`;
        });
      }

      this.saveBossData(boss);
      this.saveAllData(data);
      return api.sendMessage(msg, threadID, messageID);
    }

    // New rebirth system
    if (cmd === "rebirth") {
      if (user.realm !== "Phi Thăng") return api.sendMessage("❌ Chỉ có thể tái sinh ở cảnh giới Phi Thăng!", threadID, messageID);
      if (user.exp < 50000) return api.sendMessage("❌ Cần tối thiểu 50,000 EXP để tái sinh!", threadID, messageID);
      
      user.realm = "Luyện Khí";
      user.exp = 0;
      user.theChat = Math.min(200, user.theChat + 50);
      user.linhThach += 100;
      user.rebirthCount = (user.rebirthCount || 0) + 1;
      
      this.saveAllData(data);
      return api.sendMessage(`🔄 Tái sinh thành công! Lần ${user.rebirthCount}\n+50 Thể chất +100 Linh Thạch`, threadID, messageID);
    }

    return api.sendMessage("❓ Lệnh không hợp lệ. Gõ `.tutien` để xem menu.", threadID, messageID);
  }

  static async onEvent({ event }) {
    const data = this.getAllData();
    const user = data[event.senderID];
    if (!user) return;
    
    let gain = Math.floor(Math.random() * 3) + 1;
    
    // Clan bonus for passive EXP
    if (user.clan) {
      const clanData = this.getClanData();
      const clan = clanData[user.clan];
      if (clan && clan.buildings?.library) {
        gain = Math.floor(gain * (1 + clan.buildings.library * 0.1));
      }
    }
    
    user.exp += gain;
    
    // Energy regeneration system (1 energy per 5 minutes of activity)
    const now = Date.now();
    if (!user.lastEnergyRegen) user.lastEnergyRegen = now;
    const timeSinceRegen = now - user.lastEnergyRegen;
    
    if (timeSinceRegen >= 300000 && user.battleEnergy < 100) { // 5 minutes
      user.battleEnergy = Math.min(100, user.battleEnergy + 1);
      user.lastEnergyRegen = now;
    }
    
    this.saveAllData(data);
  }

  static async onReply() {}
  static async onReaction() {}
};