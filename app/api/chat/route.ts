// Next.js API 路由处理聊天消息
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message, userId, language } = await request.json()

    // 这里可以集成 AI 客服或转发给人工客服
    // 示例：使用 OpenAI API 作为智能客服
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              language === "zh"
                ? "你是黑狐电动车的客服代表，请用中文回答用户关于电动三轮车的问题。"
                : "You are a customer service representative for ETrike Fox. Please answer user questions about electric tricycles in English.",
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 150,
        temperature: 0.7,
      }),
    })

    const data = await response.json()
    const reply = data.choices[0]?.message?.content || "Sorry, I could not process your request."

    return NextResponse.json({
      success: true,
      reply,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
