import Link from "next/link";
import { promises as fs } from 'fs';
import path from 'path';
import JsonViewer from '../components/JSONAccordion';
import Image from "next/image";

const EngineeringHandbook = async () => {


    const jsonPath = path.join(process.cwd(), 'public', 'catalog.json')
    const jsonData = await fs.readFile(jsonPath, 'utf-8')
    const data = JSON.parse(jsonData)
    return (<div className="p-8 max-w-4xl">

        <h1 className="text-4xl font-bold mb-8">Product Engineering Handbook</h1>

        <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Product Engineering Platform</h2>


            <h3 className="text-3xl font-bold mb-8">Product Catalog</h3>
            <Image width="800" height="800" alt="catalog" src='./catalog.png' unoptimized></Image>
            <br></br>
            <div className="space-y-6">
                <h3 className="text-3xl font-bold mb-8">Product Model</h3>
                <div className="shadow rounded-lg p-6 mb-4">
                    <JsonViewer data={data} />
                </div>
                <h3 className="text-3xl font-bold mb-8">Product Rules</h3>

                <div className="border rounded p-4">
                    <h3 className="text-xl font-bold mb-2">Rule Types</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-bold mb-2">Business Rules</h4>
                            <ul className="list-disc pl-4">
                                <li>Eligibility</li>
                                <li>Approvals</li>
                                <li>Limits</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Feature Rules</h4>
                            <ul className="list-disc pl-4">
                                <li>Product Feature Rules</li>
                                <li>Credit Limit Rules</li>
                                <li>Entity Rules</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h3 className="text-3xl font-bold mb-8">Product Experiences</h3>

                <div className="border rounded p-4">
                    <h3 className="text-xl font-bold mb-2">Experience Layer</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <h4 className="font-bold">Web - Low Code</h4>
                            <ul className="list-disc pl-4 text-sm">
                                <li>Components</li>
                                <li>Forms</li>
                                <li>Flows</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold">API - Low Code</h4>
                            <ul className="list-disc pl-4 text-sm">
                                <li>REST</li>
                                <li>GraphQL</li>
                                <li>Streams</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold">Agentic</h4>
                            <ul className="list-disc pl-4 text-sm">
                                <li>Intents</li>
                                <li>AI Agents</li>
                                <li>Flows</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold">Headless</h4>
                            <ul className="list-disc pl-4 text-sm">
                                <li>ERP</li>
                                <li>Files</li>
                                <li>Streams</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Product Delivery</h2>
            <div className="grid grid-cols-2 gap-6">
                <div className="border rounded p-4">
                    <h3 className="text-xl font-bold mb-2">Pipeline</h3>
                    <div className="space-y-2">
                        <div className="p-2 rounded">Catalog: model → test → publish</div>
                        <div className="p-2 rounded">Solution: validate → rules → expose</div>
                        <div className="p-2 rounded">Deploy: stage → A/B test → prod</div>
                    </div>
                </div>
                <div className="border rounded p-4">
                    <h3 className="text-xl font-bold mb-2">Standards</h3>
                    <ul className="list-disc pl-4">
                        <li>Product Catalog Semantics</li>
                        <li>Product Deployment Strategy</li>
                        <li>Product Eligibility and Compliance</li>



                    </ul>
                </div>
            </div>
        </section>
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Metrics and Governance</h2>
            <div className="grid grid-cols-2 gap-6">
                <div className="border rounded p-4">
                    <h3 className="text-xl font-bold mb-2">Efficiency</h3>
                    <div className="space-y-2">
                        <div className="p-2 rounded">Component reuse rate</div>
                        <div className="p-2 rounded">Automated vs manual changes</div>
                        <div className="p-2 rounded">Self-service adoption</div>
                        <div className="p-2 rounded">Resource utilization</div>
                    </div>
                </div>
                <div className="border rounded p-4">
                    <h3 className="text-xl font-bold mb-2">Business Impact</h3>
                    <ul className="list-disc pl-4">
                        <div className="p-2 rounded">Product launch success rate</div>
                        <div className="p-2 rounded">Feature adoption speed</div>
                        <div className="p-2 rounded">Cost per product change</div>
                        <div className="p-2 rounded">Customer satisfaction</div>



                    </ul>
                </div>
                <div className="border rounded p-4">
                    <h3 className="text-xl font-bold mb-2">Quality</h3>
                    <ul className="list-disc pl-4">
                        <div className="p-2 rounded">Production incidents</div>
                        <div className="p-2 rounded">Rule execution errors</div>
                        <div className="p-2 rounded">Integration failures</div>
                        <div className="p-2 rounded">System Usability Scale</div>



                    </ul>
                </div>
                <div className="border rounded p-4">
                    <h3 className="text-xl font-bold mb-2">Team Performance</h3>
                    <ul className="list-disc pl-4">
                        <div className="p-2 rounded">Knowledge sharing sessions</div>
                        <div className="p-2 rounded">Cross-training coverage</div>
                        <div className="p-2 rounded">Innovation initiatives</div>
                        <div className="p-2 rounded">Certification completion</div>



                    </ul>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Product Operations</h2>
            <div className="grid grid-cols-2 gap-6">
                <div className="border rounded p-4">
                    <h3 className="text-xl font-bold mb-2">Monitoring</h3>
                    <div className="space-y-2">
                        {["Usage", "Performance", "Errors", "Insights"].map(metric => (
                            <div key={metric} className="p-2 rounded">{metric}</div>
                        ))}
                    </div>
                </div>
                <div className="border rounded p-4">
                    <h3 className="text-xl font-bold mb-2">Lifecycle</h3>
                    <div className="space-y-2">
                        {["Draft", "Review", "Active", "Retired"].map(state => (
                            <div key={state} className="p-2 rounded">{state}</div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        <Link href="/engineeringPractice" className="text-blue-500 hover:text-blue-700">
            Engineering Practice
        </Link>

    </div>
    )
}


export default EngineeringHandbook
