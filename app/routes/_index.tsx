import type { MetaFunction } from "@remix-run/node";
import { Archive, ArchiveX, Calculator, Calendar, CircleAlert, Clock, CreditCard, EllipsisVertical, File, Forward, Inbox, Mail, MessagesSquare, Reply, ReplyAll, Send, Settings, ShoppingCart, Smile, Trash2, User, Users } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Command, CommandGroup, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "~/components/ui/command";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "~/components/ui/resizable";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { Separator } from "~/components/ui/separator";
import { Switch } from "~/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Textarea } from "~/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function onCollapse() {
    console.log("collasped")
    setIsCollapsed(true)
  }

  function onExpand() {
    setIsCollapsed(false)
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
        onExpand={onExpand}
        className="group"
      >
        <div className="p-2">
          <Select defaultValue="kyle@example.com">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="kyle@example.com">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4" />
                    <span className="ml-2">kyle@example.com</span>
                  </div>
                </SelectItem>
                <SelectItem value="kyle@gmail.com">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4" />
                    <span className="ml-2">kyle@gmail.com</span>
                  </div>
                </SelectItem>
                <SelectItem value="kyle@me.com">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4" />
                    <span className="ml-2">kyle@me.com</span>
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <Separator orientation="horizontal" className="w-full" />
        <Tabs defaultValue="inbox">
          <TabsList className="h-auto flex flex-col gap-y-1 bg-white p-2">
            <TabsTrigger 
              value="inbox" 
              className={`${isCollapsed && 'justify-center'} w-full group-[[data-collapsed=true]]:justify-center justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary`}
            >
              <Inbox className={`${isCollapsed && 'mr-0'} mr-2 h-5 w-5`} />
              {!isCollapsed && 
                <>
                  <span>Inbox</span>
                  <span className="ml-auto">128</span>
                </>
              }
            </TabsTrigger>
            <TabsTrigger 
              value="drafts" 
              className={`${isCollapsed && 'justify-center'} w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary`}
            >
              <File className={`${isCollapsed && 'mr-0'} mr-2 h-5 w-5`} />
              {!isCollapsed && 
                <>
                  <span>Drafts</span>
                  <span className="ml-auto">9</span>
                </>
              }
            </TabsTrigger>
            <TabsTrigger 
              value="sent" 
              className={`${isCollapsed && 'justify-center'} w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary`}
              >
              <Send className={`${isCollapsed && 'mr-0'} mr-2 h-5 w-5`} />
              {!isCollapsed && 
                <>
                  <span>Sent</span>
                  <span className="ml-auto"></span>
                </>
              }
            </TabsTrigger>
            <TabsTrigger 
              value="junk" 
              className={`${isCollapsed && 'justify-center'} w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary`}
              >
              <ArchiveX className={`${isCollapsed && 'mr-0'} mr-2 h-5 w-5`} />
              {!isCollapsed && 
                <>
                  <span>Junk</span>
                  <span className="ml-auto">23</span>
                </>
              }
            </TabsTrigger>
            <TabsTrigger 
              value="trash" 
              className={`${isCollapsed && 'justify-center'} w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary`}
              >
              <Trash2 className={`${isCollapsed && 'mr-0'} mr-2 h-5 w-5`} />
              {!isCollapsed && 
                <>
                  <span>Trash</span>
                  <span className="ml-auto"></span>
                </>
              }
            </TabsTrigger>
            <TabsTrigger 
              value="archive" 
              className={`${isCollapsed && 'justify-center'} w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary`}
            >
              <Archive className={`${isCollapsed && 'mr-0'} mr-2 h-5 w-5`} />
              {!isCollapsed && 
                <>
                  <span>Archive</span>
                  <span className="ml-auto"></span>
                </>
              }
            </TabsTrigger>
            <Separator orientation="horizontal" className="w-[calc(100%+16px)] my-1" />
            <TabsTrigger 
              value="social" 
              className={`${isCollapsed && 'justify-center'} w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary`}
            >
              <Users className={`${isCollapsed && 'mr-0'} mr-2 h-5 w-5`} />
              {!isCollapsed && 
                <>
                  <span>Social</span>
                  <span className="ml-auto">972</span>
                </>
              }
            </TabsTrigger>
            <TabsTrigger 
              value="updates" 
              className={`${isCollapsed && 'justify-center'} w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary`}
            >
              <CircleAlert className={`${isCollapsed && 'mr-0'} mr-2 h-5 w-5`} />
              {!isCollapsed && 
                <>
                  <span>Updates</span>
                  <span className="ml-auto">342</span>
                </>
              }
            </TabsTrigger>
            <TabsTrigger 
              value="forums" 
              className={`${isCollapsed && 'justify-center'} w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary`}
              >
              <MessagesSquare className={`${isCollapsed && 'mr-0'} mr-2 h-5 w-5`} />
              {!isCollapsed && 
                <>
                  <span>Forums</span>
                  <span className="ml-auto">128</span>
                </>
              }
            </TabsTrigger>
            <TabsTrigger 
              value="shopping" 
              className={`${isCollapsed && 'justify-center'} w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary`}
              >
              <ShoppingCart className={`${isCollapsed && 'mr-0'} mr-2 h-5 w-5`} />
              {!isCollapsed && 
                <>
                  <span>Shopping</span>
                  <span className="ml-auto">8</span>
                </>
              }
            </TabsTrigger>
            <TabsTrigger 
              value="promotions" 
              className={`${isCollapsed && 'justify-center'} w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary`}
              >
              <Archive className={`${isCollapsed && 'mr-0'} mr-2 h-5 w-5`} />
              {!isCollapsed && 
                <>
                  <span>Promotions</span>
                  <span className="ml-auto">21</span>
                </>
              }
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={50} minSize={40}>
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">Inbox</h1>
              <Tabs defaultValue="all-mail" className="ml-auto">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="all-mail">All mail</TabsTrigger>
                  <TabsTrigger value="unread">Unread</TabsTrigger>
                </TabsList>
        
              </Tabs>
            </div>
            <Separator orientation="horizontal" className="w-full" />
            <ScrollArea className="w-full h-[calc(100vh-56px)]">
              
              <div className="flex flex-col gap-2 p-4">

                {emails.map((email) => (
                  <button key={email.id} className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
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
                    </div>
                  </button>
                ))}
              </div>

            </ScrollArea>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50} minSize={50}>
            <div className="flex h-full flex-col">
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
              <Separator orientation="horizontal" className="w-full" />
              {/* <ScrollArea className="h-full w-full"> */}
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start p-4">
                    <div className="flex items-start gap-4 text-sm">
                      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">WS</span>
                      </span>
                      <div className="grid gap-1">
                        <div className="font-semibold">William Smith</div>
                        <div className="line-clamp-1 text-xs">Meeting Tomorrow</div>
                        <div className="line-clamp-1 text-xs">
                          <span className="font-medium">Reply-To:</span> williamsmith@example.com
                        </div>
                      </div>
                    </div>
                    <div className="ml-auto text-xs text-muted-foreground">Oct 22, 2023, 9:00:00 AM</div>
                  </div>
                  <Separator orientation="horizontal" className="w-full" />
                  <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
                    Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. 
                    
                    Please come prepared with any questions or insights you may have. Looking forward to our meeting! 
                    
                    Best regards, William
                  </div>
                  <Separator orientation="horizontal" className="w-full" />
                  <div className="p-4">
                    <form>
                      <div className="grid gap-4">
                        <Textarea placeholder="Reply" />
                        <div className="flex items-center gap-2">
                          <Switch id="mute-thread" />
                          <Label htmlFor="mute-thread" className="text-xs font-normal">Mute this thread</Label>
                          <Button size="sm" className="text-xs ml-auto">Send</Button>
                        </div>
                      </div>
                      
                    </form>
                  </div>
                </div>
              {/* </ScrollArea> */}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

type SideBarNavTabProps = {
  isCollapsed: boolean,
}

export function SideBarNavTab({ isCollapsed }: SideBarNavTabProps) {
  return (
    <TabsTrigger 
      value="drafts" 
      className={`${isCollapsed && 'justify-center'} w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary`}
    >
      <File className={`${isCollapsed && 'mr-0'} mr-2 h-5 w-5`} />
      {!isCollapsed && 
        <>
          <span>Drafts</span>
          <span className="ml-auto">9</span>
        </>
      }
    </TabsTrigger>
  )
}

const emails = Array.from({ length: 25 }).map((_, i) => ({
  id: i.toString(),
  from: "William Smith",
  date: "Oct 22, 2023, 9:00:00 AM",
  subject: "Meeting Tomorrow",
  message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
  tags: [
    "meeting",
    "work",
    "important",
  ],
}))

const mail = [
  {
    // id: i.toString(),
    from: "William Smith",
    date: "Oct 22, 2023, 9:00:00 AM",
    subject: "Meeting Tomorrow",
    message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
    tags: [
      "meeting",
      "work",
      "important",
    ],
    replyTo: "williamsmith@example.com",
    unread: false,
  },
  {
    // id: i.toString(),
    from: "Alice Smith",
    date: "Oct 22, 2023, 10:30:00 AM",
    subject: "Re: Project Update",
    message: "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in. I have a few minor suggestions that I'll include in the attached document. Let's discuss these during our next meeting. Keep up the excellent work! Best regards, Alice",
    tags: [
      "work",
      "important",
    ],
    replyTo: "alicesmith@example.com",
    unread: false,
  },
  {
    // id: i.toString(),
    from: "Bob Johnson",
    date: "Apr 10, 2023, 11:45:00 AM",
    subject: "Weekend Plans",
    message: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun. If you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature. Looking forward to your response! Best, Bob",
    tags: [
      "personal",
    ],
    replyTo: "bobjohnson@example.com",
    unread: false,
  },
  {
    // id: i.toString(),
    from: "Emily Davis",
    date: "Mar 25, 2023, 1:15:00 PM",
    subject: "Re: Question about Budget",
    message: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources. I've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality. I've attached a detailed analysis for your reference. Let's discuss this further in our next meeting. Thanks, Emily",
    tags: [
      "work",
      "budget",
    ],
    replyTo: "emilydavis@example.com",
    unread: true,
  },
  {
    // id: i.toString(),
    from: "Michael Wilson",
    date: "Mar 10, 2023, 3:00:00 PM",
    subject: "Important Announcement",
    message: "I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product launch. We've received valuable feedback from our beta testers, and I believe it's time to make some adjustments to better meet our customers' needs. This change is crucial to our success, and I look forward to discussing it with the team. Please be prepared to share your insights during the meeting. Regards, Michael",
    tags: [
      "meeting",
      "work",
      "important",
    ],
    replyTo: "michaelwilson@example.com",
    unread: true,
  },
  {
    // id: i.toString(),
    from: "Sarah Brown",
    date: "Feb 15, 2023, 4:30:00 PM",
    subject: "Re: Feedback on Proposal",
    message: "Thank you for your feedback on the proposal. It looks great! I'm pleased to hear that you found it promising. The team worked diligently to address all the key points you raised, and I believe we now have a strong foundation for the project. I've attached the revised proposal for your review. Please let me know if you have any further comments or suggestions. Looking forward to your response. Best regards, Sarah",
    tags: [
      "work",
    ],
    replyTo: "sarahbrown@example.com",
    unread: false,
  },
  // {
  //   // id: i.toString(),
  //   from: "William Smith",
  //   date: "Oct 22, 2023, 9:00:00 AM",
  //   subject: "Meeting Tomorrow",
  //   message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
  //   tags: [
  //     "meeting",
  //     "work",
  //     "important",
  //   ],
  //   replyTo: "williamsmith@example.com",
  // },
  // {
  //   // id: i.toString(),
  //   from: "William Smith",
  //   date: "Oct 22, 2023, 9:00:00 AM",
  //   subject: "Meeting Tomorrow",
  //   message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
  //   tags: [
  //     "meeting",
  //     "work",
  //     "important",
  //   ],
  //   replyTo: "williamsmith@example.com",
  // },
  // {
  //   // id: i.toString(),
  //   from: "William Smith",
  //   date: "Oct 22, 2023, 9:00:00 AM",
  //   subject: "Meeting Tomorrow",
  //   message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
  //   tags: [
  //     "meeting",
  //     "work",
  //     "important",
  //   ],
  //   replyTo: "williamsmith@example.com",
  // },
  // {
  //   // id: i.toString(),
  //   from: "William Smith",
  //   date: "Oct 22, 2023, 9:00:00 AM",
  //   subject: "Meeting Tomorrow",
  //   message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
  //   tags: [
  //     "meeting",
  //     "work",
  //     "important",
  //   ],
  //   replyTo: "williamsmith@example.com",
  // },
  // {
  //   // id: i.toString(),
  //   from: "William Smith",
  //   date: "Oct 22, 2023, 9:00:00 AM",
  //   subject: "Meeting Tomorrow",
  //   message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
  //   tags: [
  //     "meeting",
  //     "work",
  //     "important",
  //   ],
  //   replyTo: "williamsmith@example.com",
  // },
  // {
  //   // id: i.toString(),
  //   from: "William Smith",
  //   date: "Oct 22, 2023, 9:00:00 AM",
  //   subject: "Meeting Tomorrow",
  //   message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
  //   tags: [
  //     "meeting",
  //     "work",
  //     "important",
  //   ],
  //   replyTo: "williamsmith@example.com",
  // },
  // {
  //   // id: i.toString(),
  //   from: "William Smith",
  //   date: "Oct 22, 2023, 9:00:00 AM",
  //   subject: "Meeting Tomorrow",
  //   message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
  //   tags: [
  //     "meeting",
  //     "work",
  //     "important",
  //   ],
  //   replyTo: "williamsmith@example.com",
  // },
  // {
  //   // id: i.toString(),
  //   from: "William Smith",
  //   date: "Oct 22, 2023, 9:00:00 AM",
  //   subject: "Meeting Tomorrow",
  //   message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
  //   tags: [
  //     "meeting",
  //     "work",
  //     "important",
  //   ],
  //   replyTo: "williamsmith@example.com",
  // },
  // {
  //   // id: i.toString(),
  //   from: "William Smith",
  //   date: "Oct 22, 2023, 9:00:00 AM",
  //   subject: "Meeting Tomorrow",
  //   message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
  //   tags: [
  //     "meeting",
  //     "work",
  //     "important",
  //   ],
  //   replyTo: "williamsmith@example.com",
  // },
  // {
  //   // id: i.toString(),
  //   from: "William Smith",
  //   date: "Oct 22, 2023, 9:00:00 AM",
  //   subject: "Meeting Tomorrow",
  //   message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
  //   tags: [
  //     "meeting",
  //     "work",
  //     "important",
  //   ],
  //   replyTo: "williamsmith@example.com",
  // },
  // {
  //   // id: i.toString(),
  //   from: "William Smith",
  //   date: "Oct 22, 2023, 9:00:00 AM",
  //   subject: "Meeting Tomorrow",
  //   message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
  //   tags: [
  //     "meeting",
  //     "work",
  //     "important",
  //   ],
  //   replyTo: "williamsmith@example.com",
  // },
  // {
  //   // id: i.toString(),
  //   from: "William Smith",
  //   date: "Oct 22, 2023, 9:00:00 AM",
  //   subject: "Meeting Tomorrow",
  //   message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
  //   tags: [
  //     "meeting",
  //     "work",
  //     "important",
  //   ],
  //   replyTo: "williamsmith@example.com",
  // },
  // {
  //   // id: i.toString(),
  //   from: "William Smith",
  //   date: "Oct 22, 2023, 9:00:00 AM",
  //   subject: "Meeting Tomorrow",
  //   message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
  //   tags: [
  //     "meeting",
  //     "work",
  //     "important",
  //   ],
  //   replyTo: "williamsmith@example.com",
  // },
  // {
  //   // id: i.toString(),
  //   from: "William Smith",
  //   date: "Oct 22, 2023, 9:00:00 AM",
  //   subject: "Meeting Tomorrow",
  //   message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
  //   tags: [
  //     "meeting",
  //     "work",
  //     "important",
  //   ],
  //   replyTo: "williamsmith@example.com",
  // },
  // {
  //   // id: i.toString(),
  //   from: "William Smith",
  //   date: "Oct 22, 2023, 9:00:00 AM",
  //   subject: "Meeting Tomorrow",
  //   message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
  //   tags: [
  //     "meeting",
  //     "work",
  //     "important",
  //   ],
  //   replyTo: "williamsmith@example.com",
  // },
  // {
  //   // id: i.toString(),
  //   from: "William Smith",
  //   date: "Oct 22, 2023, 9:00:00 AM",
  //   subject: "Meeting Tomorrow",
  //   message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
  //   tags: [
  //     "meeting",
  //     "work",
  //     "important",
  //   ],
  //   replyTo: "williamsmith@example.com",
  // },
  // {
  //   // id: i.toString(),
  //   from: "William Smith",
  //   date: "Oct 22, 2023, 9:00:00 AM",
  //   subject: "Meeting Tomorrow",
  //   message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
  //   tags: [
  //     "meeting",
  //     "work",
  //     "important",
  //   ],
  //   replyTo: "williamsmith@example.com",
  // },
  // {
  //   // id: i.toString(),
  //   from: "William Smith",
  //   date: "Oct 22, 2023, 9:00:00 AM",
  //   subject: "Meeting Tomorrow",
  //   message: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
  //   tags: [
  //     "meeting",
  //     "work",
  //     "important",
  //   ],
  //   replyTo: "williamsmith@example.com",
  // },
]