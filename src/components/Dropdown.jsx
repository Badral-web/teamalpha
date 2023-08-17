import { Listbox } from '@headlessui/react'
import { useState } from 'react'

const options = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
]

const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState(options[0])

    return (
        <div className="relative inline-block text-left">
            <Listbox value={selectedOption} onChange={setSelectedOption}>
                <div className="relative">
                    <button className="block cursor-pointer">
                        Open Dropdown
                    </button>
                    <Listbox.Options className="absolute z-10 mt-2 w-48 py-2 bg-white border border-gray-300 rounded shadow-lg">
                        {options.map((option) => (
                            <Listbox.Option key={option.id} value={option}>
                                {({ active, selected }) => (
                                    <div
                                        className={`${
                                            active
                                                ? 'bg-blue-500 text-white'
                                                : 'text-gray-900'
                                        } cursor-pointer select-none relative py-2 pl-10 pr-4`}
                                    >
                                        {option.name}
                                        {selected && (
                                            <span
                                                className={`${
                                                    active
                                                        ? 'text-white'
                                                        : 'text-blue-500'
                                                } absolute inset-y-0 left-0 flex items-center pl-3`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        )}
                                    </div>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
        </div>
    )
}

export default Dropdown
