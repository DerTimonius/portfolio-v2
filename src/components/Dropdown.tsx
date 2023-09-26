import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          id="dropdownNavbarLink"
          type="button"
          data-dropdown-toggle="dropdownNavbar"
          className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 md:p-0 md:w-auto dark:text-white"
        >
          Categories
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: not-needed */}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="font-normal rounded-lg shadow w-44 bg-white"
          sideOffset={5}
        >
          <DropdownMenu.Item className="block px-4 py-2  hover:underline outline-none border-0">
            <a href="/category/street">Street</a>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="block px-4 py-2  hover:underline outline-none">
            <a href="/category/landscape">Landscape</a>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="block px-4 py-2  hover:underline outline-none"
            disabled
          >
            <a href="/category/abstract">Abstract</a>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
