import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function Dropdown({ title = 'Chapter 1', questions = [], setActiveChapter, setActiveQuestion, index }) {
  return (
    <Menu as="div" className="w-full relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex justify-between w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-inset ring-gray-300 hover:bg-gray-50 text-left my-1">
          {title}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {questions.map(e => {
            console.log(e);
            return (
              <MenuItem key={e.questionNo}>
                <p
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  onClick={() => {
                    setActiveChapter(index);
                    setActiveQuestion(e.questionNo);
                  }}
                >
                  {e.questionNo}
                </p>
              </MenuItem>
            );
          })}
        </div>
      </MenuItems>
    </Menu>
  );
}

export default Dropdown;
