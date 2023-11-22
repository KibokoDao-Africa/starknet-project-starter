
"use client";

import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import WalletBar from './WalletBar';
import ClientOnly from './client-only';


const navigation = [
  { name: 'Home', href: '#', current: true },
 
];


interface LayoutProps {
	children: React.ReactNode;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function AppLayout({ children }: LayoutProps) {
  return (
    <ClientOnly>
      <div className='min-h-full'>
        <div className='bg-teal-600 pb-32'>
          <Disclosure
            as='nav'
            className='border-b border-teal-300 border-opacity-25 bg-teal-600 lg:border-none'
          >
            {({ open }) => (
              <>
                <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8'>
                  <div className='relative flex h-16 items-center justify-between lg:border-b lg:border-teal-400 lg:border-opacity-25'>
                    <div className='flex items-center px-2 lg:px-0'>
                      <div className='flex-shrink-0'>
                        <img
                          className='block h-8 w-8'
                          src='https://pbs.twimg.com/profile_images/1656626805816565763/WyFDMG6u_400x400.png'
                          alt='Your Company'
                        />
                      </div>
                      <div className='hidden lg:ml-10 lg:block'>
                        <div className='flex space-x-4'>
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-teal-700 text-white'
                                  : 'text-white hover:bg-teal-500 hover:bg-opacity-75',
                                'rounded-md py-2 px-3 text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* connect wallet button */}
                    <div className='hidden lg:ml-4 lg:block'>
                      <div className='flex items-center'>
                        <WalletBar />
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className='lg:hidden'>
                  <div className='space-y-1 px-2 pb-3 pt-2'>
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as='a'
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-teal-700 text-white'
                            : 'text-white hover:bg-teal-500 hover:bg-opacity-75',
                          'block rounded-md py-2 px-3 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className='py-10'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <h1 className='text-3xl font-bold tracking-tight text-white'>
                Home
              </h1>
            </div>
          </header>
        </div>

        <main className='-mt-32'>
          <div className='mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 h-full'>
            {children}
          </div>
        </main>
      </div>
    </ClientOnly>
  );
}
