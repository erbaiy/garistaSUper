import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

export function RecentSalesOrders() {
  return (
    <ScrollArea className="h-[350px] w-full rounded-md  p-4">
      <div className="space-y-8">
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/564x/c2/78/76/c2787689c506fb61999d8c9d88bccaab.jpg"
            className="border border-black rounded-full w-9 h-9"
          />

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
          </div>
          <div className="ml-auto font-medium">199.00 MAD</div>
        </div>
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/564x/c2/78/76/c2787689c506fb61999d8c9d88bccaab.jpg"
            className="border border-black rounded-full w-9 h-9"
          />

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
          </div>
          <div className="ml-auto font-medium">199.00 MAD</div>
        </div>
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/564x/c2/78/76/c2787689c506fb61999d8c9d88bccaab.jpg"
            className="border border-black rounded-full w-9 h-9"
          />

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
          </div>
          <div className="ml-auto font-medium">199.00 MAD</div>
        </div>
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/564x/c2/78/76/c2787689c506fb61999d8c9d88bccaab.jpg"
            className="border border-black rounded-full w-9 h-9"
          />

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
          </div>
          <div className="ml-auto font-medium">199.00 MAD</div>
        </div>
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/564x/c2/78/76/c2787689c506fb61999d8c9d88bccaab.jpg"
            className="border border-black rounded-full w-9 h-9"
          />

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
          </div>
          <div className="ml-auto font-medium">199.00 MAD</div>
        </div>
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/564x/c2/78/76/c2787689c506fb61999d8c9d88bccaab.jpg"
            className="border border-black rounded-full w-9 h-9"
          />
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Jackson Lee</p>
            {/* <p className="text-sm text-muted-foreground">jackson.lee@email.com</p> */}
          </div>
          <div className="ml-auto font-medium">39.00 MAD</div>
        </div>
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/564x/c2/78/76/c2787689c506fb61999d8c9d88bccaab.jpg"
            className="border border-black rounded-full w-9 h-9"
          />

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
            {/* <p className="text-sm text-muted-foreground">
              isabella.nguyen@email.com
            </p> */}
          </div>
          <div className="ml-auto font-medium">299.00 MAD</div>
        </div>
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/564x/c2/78/76/c2787689c506fb61999d8c9d88bccaab.jpg"
            className="border border-black rounded-full w-9 h-9"
          />

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">William Kim</p>
            {/* <p className="text-sm text-muted-foreground">will@email.com</p> */}
          </div>
          <div className="ml-auto font-medium">99.00 MAD</div>
        </div>
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/564x/c2/78/76/c2787689c506fb61999d8c9d88bccaab.jpg"
            className="border border-black rounded-full w-9 h-9"
          />

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Sofia Davis</p>
            {/* <p className="text-sm text-muted-foreground">sofia.davis@email.com</p> */}
          </div>
          <div className="ml-auto font-medium">39.00 MAD</div>
        </div>
      </div>
    </ScrollArea>
  );
}
