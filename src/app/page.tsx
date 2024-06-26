import { Badge } from "@/components/ui/badge";
import ChatBox from "@/components/chatbox";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col space-y-6 p-4 md:p-8">
      <header className=""></header>
      <main className="flex h-full w-full flex-1 flex-col">
        <div className="mx-auto flex flex-col h-full flex-1 px-4 py-4 border-border w-full rounded-lg border backdrop-blur-[2px] md:p-6">
          <div className="mx-auto flex w-full flex-col gap-8 h-full flex-1">
            <div className="col-span-full flex items-start justify-between gap-1">
              <div className="flex min-w-0 flex-col gap-1 h-full">
                <h1 className="font-cal text-3xl">Chrome AI Test Page</h1>
                <p className="text-muted-foreground">
                  Running large language models locally in the browser
                </p>
                <span>
                  <Badge>Gemini Nano</Badge>
                </span>
              </div>
            </div>

            <ChatBox />
          </div>
        </div>
      </main>
    </div>
  );
}
