import * as AlertDialog from '@radix-ui/react-alert-dialog';

export default function AlertDialogComponent() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>Open</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Content>
          <AlertDialog.Title>Alert Dialog</AlertDialog.Title>
          <AlertDialog.Description>
            This is a Radix UI Alert Dialog component.
          </AlertDialog.Description>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action>Continue</AlertDialog.Action>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
} 