"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "./drawer";

export function Modal(
  props: React.ComponentProps<typeof Dialog> &
    React.ComponentProps<typeof Drawer>
) {
  const isMobile = useIsMobile();
  return isMobile ? <Drawer {...props} /> : <Dialog {...props} />;
}

export function ModalTrigger(
  props: React.ComponentProps<typeof DialogTrigger> &
    React.ComponentProps<typeof DrawerTrigger>
) {
  const isMobile = useIsMobile();
  return isMobile ? <DrawerTrigger {...props} /> : <DialogTrigger {...props} />;
}

export function ModalPortal(
  props: React.ComponentProps<typeof DialogPortal> &
    React.ComponentProps<typeof DrawerPortal>
) {
  const isMobile = useIsMobile();
  return isMobile ? <DrawerPortal {...props} /> : <DialogPortal {...props} />;
}

export function ModalClose(
  props: React.ComponentProps<typeof DialogClose> &
    React.ComponentProps<typeof DrawerClose>
) {
  const isMobile = useIsMobile();
  return isMobile ? <DrawerClose {...props} /> : <DialogClose {...props} />;
}

export function ModalOverlay(
  props: React.ComponentProps<typeof DialogOverlay> &
    React.ComponentProps<typeof DrawerOverlay>
) {
  const isMobile = useIsMobile();
  return isMobile ? <DrawerOverlay {...props} /> : <DialogOverlay {...props} />;
}

export function ModalContent(
  props: React.ComponentProps<typeof DialogContent> &
    React.ComponentProps<typeof DrawerContent>
) {
  const isMobile = useIsMobile();
  return isMobile ? <DrawerContent {...props} /> : <DialogContent {...props} />;
}

export function ModalHeader(
  props: React.ComponentProps<typeof DialogHeader> &
    React.ComponentProps<typeof DrawerHeader>
) {
  const isMobile = useIsMobile();
  return isMobile ? <DrawerHeader {...props} /> : <DialogHeader {...props} />;
}

export function ModalFooter(
  props: React.ComponentProps<typeof DialogFooter> &
    React.ComponentProps<typeof DrawerFooter>
) {
  const isMobile = useIsMobile();
  return isMobile ? <DrawerFooter {...props} /> : <DialogFooter {...props} />;
}

export function ModalTitle(
  props: React.ComponentProps<typeof DialogTitle> &
    React.ComponentProps<typeof DrawerTitle>
) {
  const isMobile = useIsMobile();
  return isMobile ? <DrawerTitle {...props} /> : <DialogTitle {...props} />;
}

export function ModalDescription(
  props: React.ComponentProps<typeof DialogDescription> &
    React.ComponentProps<typeof DrawerDescription>
) {
  const isMobile = useIsMobile();
  return isMobile ? (
    <DrawerDescription {...props} />
  ) : (
    <DialogDescription {...props} />
  );
}
