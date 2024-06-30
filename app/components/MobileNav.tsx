import { Archive, ArchiveX, CircleAlert, File, Inbox, Menu, MessagesSquare, Send, ShoppingCart, Trash2, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:flex">
          <Menu className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-1 pt-10">
        <Tabs defaultValue="inbox">
          <TabsList className="h-auto flex flex-col gap-y-1 bg-white p-2">
            <TabsTrigger 
              value="inbox" 
              className="w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary"
            >
              <Inbox className="mr-2 h-5 w-5" />
                <span>Inbox</span>
                <span className="ml-auto">128</span>
            </TabsTrigger>
            <TabsTrigger 
              value="drafts" 
              className="w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary"
            >
              <File className="mr-2 h-5 w-5" />
                <span>Drafts</span>
                <span className="ml-auto">9</span>
            </TabsTrigger>
            <TabsTrigger 
              value="sent" 
              className="w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary"
            >
              <Send className="mr-2 h-5 w-5" />
                <span>Sent</span>
                <span className="ml-auto"></span>
            </TabsTrigger>
            <TabsTrigger 
              value="junk" 
              className="w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary"
            >
              <ArchiveX className="mr-2 h-5 w-5" />
                <span>Junk</span>
                <span className="ml-auto">23</span>
            </TabsTrigger>
            <TabsTrigger 
              value="trash" 
              className="w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary"
            >
              <Trash2 className="mr-2 h-5 w-5" />
                <span>Trash</span>
                <span className="ml-auto"></span>
            </TabsTrigger>
            <TabsTrigger 
              value="archive" 
              className="w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary"
            >
              <Archive className="mr-2 h-5 w-5" />
                <span>Archive</span>
                <span className="ml-auto"></span>
            </TabsTrigger>
            <Separator orientation="horizontal" className="w-[calc(100%+16px)] my-1" />
        
            <TabsTrigger 
              value="social" 
              className="w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary"
            >
              <Users className="mr-2 h-5 w-5" />
                <span>Social</span>
                <span className="ml-auto">972</span>
            </TabsTrigger>
            <TabsTrigger 
              value="updates" 
              className="w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary"
            >
              <CircleAlert className="mr-2 h-5 w-5" />
                <span>Updates</span>
                <span className="ml-auto">342</span>
            </TabsTrigger>
            <TabsTrigger 
              value="forums" 
              className="w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary"
            >
              <MessagesSquare className="mr-2 h-5 w-5" />
                <span>Forums</span>
                <span className="ml-auto">128</span>
            </TabsTrigger>
            <TabsTrigger 
              value="shopping" 
              className="w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
                <span>Shopping</span>
                <span className="ml-auto">8</span>
            </TabsTrigger>
            <TabsTrigger 
              value="promotions" 
              className="w-full justify-start !shadow-none font-normal text-black py-2 data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-secondary"
            >
              <Archive className="mr-2 h-5 w-5" />
                <span>Promotions</span>
                <span className="ml-auto">21</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </SheetContent>
    </Sheet>
  )
}