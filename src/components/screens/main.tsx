import { useState } from "react"
import { Calendar } from "../ui/calendar"
import { Popover, PopoverTrigger } from "../ui/popover"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { PopoverContent } from "@radix-ui/react-popover"
import { ru } from "date-fns/locale"
import { format } from "date-fns"
import { useToast } from "@/hooks/use-toast"

const MainScreen = () => {
  const [date, setDate] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>()

  const { toast } = useToast()

  return (
    <div className="bg-white">
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
        }}
      >
        Show Toast
      </Button>
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up1",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
        }}
      >
        Show Toast
      </Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date && date.from && format(date.from, "dd-MM-yyyy")} -{" "}
            {date && date.to && format(date.to, "dd-MM-yyyy")}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            className="bg-white"
            locale={ru}
            mode="range"
            selected={date}
            onSelect={(e) => {
              const newDate = {
                from: e?.from || undefined,
                to: e?.to || undefined,
              }
              setDate(newDate)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default MainScreen
