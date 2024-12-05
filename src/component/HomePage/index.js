/* eslint-disable no-unused-vars */
'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Dropdown from '../Dropdown';

import class11 from '../../data/class11.json';

function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0);

  return (
    <>
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                </button>
              </div>
            </TransitionChild>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
              <div className="flex h-16 shrink-0 items-center">
                <img
                  alt="Your Company"
                  src="/img/logo.jpg"
                  className="h-8 w-auto"
                />
              </div>
              <nav className="flex flex-1 flex-col">
                <ul className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <div className="text-xs/6 font-semibold text-gray-400">
                      Class 11
                    </div>
                    <ul className="-mx-2 space-y-1">
                    {class11.map((item, index) => {
                    return (
                      <li key={item.name}>
                        <Dropdown
                          title={`${item?.name}`}
                          questions={item?.questions}
                          setActiveChapter={setActiveChapter}
                          setActiveQuestion={setActiveQuestion}
                          index={index}
                          setSidebarOpen={setSidebarOpen}
                        />
                      </li>
                    );
                  })}
                    </ul>
                  </li>
                  <li>
                    <div className="text-xs/6 font-semibold text-gray-400">
                      Class 12
                    </div>
                    {/* Class 12 */}
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
          <div className="flex h-16 shrink-0 items-center">
            <img
              alt="Your Company"
              src="/img/logo.jpg"
              className="h-8 w-auto"
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-7">
              <li>
                <div className="text-xs/6 font-semibold text-gray-400">
                  Class 11
                </div>
                <ul className="-mx-2 space-y-1">
                  {class11.map((item, index) => {
                    return (
                      <li key={item.name}>
                        <Dropdown
                          title={`${item?.name}`}
                          questions={item?.questions}
                          setActiveChapter={setActiveChapter}
                          setActiveQuestion={setActiveQuestion}
                          index={index}
                          setSidebarOpen={setSidebarOpen}
                        />
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li>
                <div className="text-xs/6 font-semibold text-gray-400">
                  Class 12
                </div>
                <ul className="-mx-2 mt-2 space-y-1">{/* Class 12 */}</ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon aria-hidden="true" className="size-6" />
        </button>
        <div className="flex-1 text-sm/6 font-semibold text-gray-900">
          <img alt="Your Company" src="/img/logo.jpg" className="h-8 w-auto" />
        </div>
      </div>

      <main className="lg:pl-72">
        <div className="xl:pr-96">
          <div className="p-6 lg:p-12">
            <h1 className="text-3xl font-semibold text-gray-900 pb-12">
              {class11[activeChapter].questions[activeQuestion].title}
            </h1>
            <div
              className="w-full relative px-4 py-10 sm:px-6 lg:px-8 lg:py-6"
              style={{ paddingTop: '56.25%' }}
            >
              <iframe
                className="rounded-lg absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                src={`https://www.youtube.com/embed/${class11[activeChapter].questions[activeQuestion].ytLink}`}
                title={class11[activeChapter].questions[activeQuestion].title}
                border="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <aside className="fixed inset-y-0 right-0 hidden w-96 overflow-y-auto border-l border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block"></aside>
    </>
  );
}

export default HomePage;
