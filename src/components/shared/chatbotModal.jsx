"use client"
import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Button } from '@/components/ui/button';

const ChatbotModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Button onClick={openModal} className="fixed bottom-right p-2 rounded-full bg-blue-500 text-whitem z-50">
        Chatbot
      </Button>

      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="flex min-h-screen items-center justify-center">
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            <Dialog.Content as="div" className="max-w-md w-full bg-white rounded-md p-4">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-semibold">Chatbot</div>
                <div className="mt-4 text-gray-500">
                  Ask me anything!
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button onClick={closeModal} className="btn btn-primary">
                  Close
                </button>
              </div>
            </Dialog.Content>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ChatbotModal;
