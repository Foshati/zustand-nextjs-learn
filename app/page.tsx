"use client";
import { Button } from "@/components/ui/button";
import { useCountStore } from "@/store/countStore";

export default function PageName() {
  const useCount = useCountStore();
  return (
    <div className="flex items-center p-4">
      <Button onClick={useCount.decrement}>-</Button>
      <p className="border bg-slate-300 rounded-full p-2">{useCount.counte}</p>
      <Button onClick={useCount.increment}>+</Button>
    </div>
  );
}
