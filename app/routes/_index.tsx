import type { MetaFunction } from "@remix-run/node";
import { Archive, ArchiveX, Calculator, Calendar, Clock, CreditCard, EllipsisVertical, Forward, Reply, ReplyAll, Settings, Smile, Trash2, User } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "~/components/ui/command";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "~/components/ui/resizable";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "~/components/ui/select";
import { Separator } from "~/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {

  function onCollapse() {
    console.log("collasped")
  }

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="fixed inset-0"
    >
      <ResizablePanel 
        defaultSize={20} 
        minSize={20} 
        maxSize={20} 
        collapsedSize={5} 
        collapsible
        onCollapse={onCollapse}
      >
        <Command className="">
          {/* <CommandInput placeholder="Type a command or search..." /> */}
          <CommandList>
            {/* <CommandEmpty>No results found.</CommandEmpty> */}
            <CommandGroup>
              <CommandItem>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
          </CommandList>
        </Command>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        <ResizablePanelGroup
          direction="horizontal"
        >
          <ResizablePanel defaultSize={50} minSize={35}>
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">Inbox</h1>
              <Tabs defaultValue="all-mail" className="ml-auto">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="all-mail">All mail</TabsTrigger>
                  <TabsTrigger value="unread">Unread</TabsTrigger>
                </TabsList>
                {/* <TabsContent value="all-mail">

                </TabsContent>
                <TabsContent value="unread">

                </TabsContent> */}
              </Tabs>
            </div>
            <ScrollArea className="w-full h-full">
              
              <div className="flex flex-col gap-2 p-4 pt-0">

                {emails.map((email) => (
                  <button key={email.id} className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent bg-muted">
                    <div className="flex w-full flex-col gap-1">
                      <div className="flex items-center">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold">{email.from}</div>
                        </div>
                        <div className="ml-auto text-xs text-foreground">{email.date}</div>
                      </div>
                      <div className="text-xs font-medium">{email.subject}</div>
                    </div>
                    <div className="line-clamp-2 text-xs text-muted-foreground">{email.message}</div>
                    <div className="flex items-center gap-2">
                      {email.tags.map((tag) => (
                        <div key={tag} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">{tag}</div>
                      ))}
                      {/* <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">meeting</div>
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">work</div>
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">important</div> */}
                    </div>
                  </button>
                ))}
              </div>

            </ScrollArea>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50} minSize={45}>
            <div className="flex items-center p-2">
              <div className="flex items-center gap-2">
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Archive className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Archive</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <ArchiveX className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Move to junk</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Move to trash</p>
                    </TooltipContent>
                  </Tooltip>
                  <Separator orientation="vertical" className="h-6 mx-1" />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Clock className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Snooze</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Reply className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Reply</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <ReplyAll className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Reply all</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Forward className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Forward</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Separator orientation="vertical" className="h-6 mx-2" />
              <Button variant="ghost" size="icon">
                <EllipsisVertical className="h-4 w-4" />
              </Button>
            </div>
            <ScrollArea className="h-full w-full">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {tags.map((tag) => (

                  <div key={tag} className="text-sm">
                    {tag}
                  </div>
                  // <Separator className="my-2" />
              ))}
            </div>
            </ScrollArea>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const emails = Array.from({ length: 25 }).map((_, i) => ({
  id: i.toString(),
  from: "William Smith",
  date: "8 months ago",
  subject: "Meeting Tomorrow",
  message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to",
  tags: [
    "meeting",
    "work",
    "important",
  ],
}))
