// WebSocket + Socket.io 方案
export const chatConfig = {
  // 使用 Socket.io 进行实时通信
  socketUrl: process.env.NEXT_PUBLIC_SOCKET_URL || "ws://localhost:3001",

  // 支持的消息类型
  messageTypes: {
    TEXT: "text",
    IMAGE: "image",
    FILE: "file",
    SYSTEM: "system",
  },

  // 多语言支持
  languages: ["en", "zh"],

  // 客服状态
  agentStatus: {
    ONLINE: "online",
    BUSY: "busy",
    OFFLINE: "offline",
  },
}
