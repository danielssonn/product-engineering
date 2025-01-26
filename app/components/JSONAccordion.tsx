'use client'
import { useState } from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react'

const JsonAccordion = ({ data }: { data: string }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className="font-mono text-sm">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center p-2 hover:bg-gray-100 rounded w-full"
            >
                {isExpanded ? (
                    <ChevronDown className="w-4 h-4 mr-2" />
                ) : (
                    <ChevronRight className="w-4 h-4 mr-2" />
                )}
                <span>JSON Content</span>
            </button>

            {isExpanded && (
                <pre className="bg-gray-100 p-4 rounded-lg overflow-auto mt-2">
                    {JSON.stringify(data, null, 2)}
                </pre>
            )}
        </div>
    )
}

export default JsonAccordion