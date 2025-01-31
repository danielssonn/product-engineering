import Link from "next/link";
import Image from "next/image";
import Tooltip from "../components/Tooltip";
const EngineerignPractice = () => {



    return (
        <div className=" p-8">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">Product Engineering Practice</h1>
                <p className="text-xl">Transforming Product Delivery Through Engineering Excellence</p>
            </div>


            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Background</h2>
                <div className="list-disc pl-6 space-y-2">
                    <pre>&#10004; Product teams are organized in discrete value streams, such as Liquidity, Payments or Digital Experience</pre>
                    <pre>&#10004; Specialized subject matter expertise and market operational experience exists in respective product organizations</pre>
                    <pre>&#33; Business agility requirements dictate the need for faster, coordinated delivery of cross product initiaves</pre>
                    <pre>&#33; Cross product coordination challenge is excarbated by divergent technology footprints in respective domains</pre>
                    <pre>&#33; We need a systemic approach to deal with the agility challenge, while maintaining the current product strenghts</pre>


                </div>
            </div>

            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Challenge</h2>
                <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 border rounded">
                        <h3 className="text-xl font-bold mb-2">Current State</h3>
                        <ul className="list-disc pl-4">
                            <li>6-9 months average product launch time</li>
                            <li>4-6 weeks for product changes</li>
                            <li>High coordination overhead among multiple product and technology organizations</li>
                        </ul>
                    </div>
                    <div className="p-4 border rounded ">
                        <h3 className="text-xl font-bold mb-2">Target State</h3>
                        <ul className="list-disc pl-4">
                            <li>2-3 months product launch time</li>
                            <li>1-2 days for product changes</li>
                            <li>70% reduction in coordination overhead</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">What is really going on?</h2>

                <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 border rounded">
                        <h3 className="text-xl font-bold mb-2">Product</h3>
                        <ul className="list-disc pl-4">
                            <li>Lacks visibility into solution delivery</li>
                            <li>Struggles describing requirements in consistent and clear fashion</li>
                            <li>Observe the churn in Jira artifacts almost untill solution deployment</li>

                        </ul>
                    </div>
                    <div className="p-4 border rounded">
                        <h3 className="text-xl font-bold mb-2">Technology</h3>
                        <ul className="list-disc pl-4">
                            <li>Facilitates requirement discovery deep into delivery/test cycles</li>
                            <li>Struggles building reusable assets</li>
                            <li>Struggles in efficiency and quality</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Product Engineering Vision</h2>
                <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
                    <p>Accelerate business agility and innovation, connect product knowledge with engineering best practice.</p></blockquote>
                <svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">

                    <rect x="50" y="50" width="200" height="200"
                        fill="#6082B6" stroke="#6082B6" strokeWidth="2" />
                    <text fill="white" x="150" y="150" textAnchor="middle" dominantBaseline="middle">
                        Product
                    </text>


                    <rect x="350" y="50" width="200" height="200"
                        fill="#6082B6" stroke="#6082B6" strokeWidth="2" />
                    <text fill="white" x="450" y="150" textAnchor="middle" dominantBaseline="middle">
                        Technology
                    </text>


                    <rect x="250" y="150" width="100" height="96"
                        fill="deepskyblue" stroke="deepskyblue" strokeWidth="10" />
                    <text fill="white" x="300" y="200" textAnchor="middle" dominantBaseline="middle">
                        Product Engineering
                    </text>
                    <text fill="white" x="300" y="220" textAnchor="middle" dominantBaseline="middle">
                        (new)                    </text>
                    <line x1="250" y1="150" x2="350" y2="150"
                        stroke="red" strokeWidth="2" strokeDasharray="15" />
                    <text fill="red" x="300" y="140" textAnchor="middle" dominantBaseline="auto">
                        Chasm
                    </text>
                </svg>


                <div className="grid grid-cols-1 gap-6">
                    <div className="p-4 border rounded">
                        <h3 className="text-xl font-bold mb-2">Product Engineering Framework</h3>

                    </div>

                </div>
                <section>
                    <div className="p-4">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="border p-2 ">Framework Component</th>
                                    <th className="border p-2 ">Value</th>
                                    <th className="border p-2 ">Waste addressed</th>
                                    <th className="border p-2 ">Now</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-2">Unified Product Model and Catalog</td>
                                    <td className="border p-2"><Tooltip text="Multi Tenant reusability is key. We need to be able to both resuse and syndicate in/out LoB, SBU, FI.">Reusable, model driven delivery, faster market entry </Tooltip></td>
                                    <td className="border p-2"><Tooltip text="Include vendor solution integration. Avoid vendor bias.">Point solutions, reduced agility, high costs per product</Tooltip>
                                    </td>
                                    <td className="border p-2"><svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0" y="0" width="100" height="40" rx="20" fill="darkolivegreen" />
                                        <text x="50" y="25" fontSize="20" textAnchor="middle" fill="white" fontFamily="Arial">3/10</text>
                                    </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border p-2">Standardized Product Rules</td>
                                    <td className="border p-2"><Tooltip text="Express business rules in unified notation. Use best fit rule engine for a purpose (Camunda, Drools, Functions)">Consistent experiences, easier maintenance, quick customization</Tooltip></td>
                                    <td className="border p-2"><Tooltip text="Most product rules are simple. If amount < 1M then approvers=2. Complex rules live in core systems. ">Many implementations of rules, complex compliance, vendor lock-in </Tooltip></td>
                                    <td className="border p-2"><svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0" y="0" width="100" height="40" rx="20" fill="#6082B6" />
                                        <text x="50" y="25" fontSize="20" textAnchor="middle" fill="white" fontFamily="Arial">2/10</text>
                                    </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border p-2">Multi-modal Product Experiences </td>
                                    <td className="border p-2"><Tooltip text="UI will be transformed by AI. Design for intents, agents and flows.">Sticky experiences and engament across products and panes of glass</Tooltip></td>
                                    <td className="border p-2">  <Tooltip text="CIT (miss)adventures! Also, Portal, APIs, H2H are closer to replicated silos, now.">Fragmentated solutions, no feature parity, duplication, costs</Tooltip> </td>
                                    <td className="border p-2"><svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0" y="0" width="100" height="40" rx="20" fill="#6082B6" />
                                        <text x="50" y="25" fontSize="20" textAnchor="middle" fill="white" fontFamily="Arial">1/10</text>
                                    </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border p-2">Automated Product Delivery Pipeline </td>
                                    <td className="border p-2"><Tooltip text="Think CI/CD pipeline like Helios, but for Product. Automate everything.">Speed and efficiency, reduced manual work, low operations overhead</Tooltip></td>
                                    <td className="border p-2"><Tooltip text="Is this more than a spreadsheet, now?">Manual process (?), higher delivery costs, higher risk </Tooltip></td>
                                    <td className="border p-2"><svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0" y="0" width="100" height="40" rx="20" fill="grey" />
                                        <text x="50" y="25" fontSize="20" textAnchor="middle" fill="white" fontFamily="Arial">0/10</text>
                                    </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border p-2">Product Lifecycle Management</td>
                                    <td className="border p-2"><Tooltip text="Product Catalog governs product lifecycle. It needs to be surfaced via UI">Clear visibility to what products are maded available where, to whom</Tooltip></td>
                                    <td className="border p-2"><Tooltip text="Is this more than a spreadsheet, now?">Manual process (?), increased compliance risk</Tooltip></td>
                                    <td className="border p-2"><svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0" y="0" width="100" height="40" rx="20" fill="grey" />
                                        <text x="50" y="25" fontSize="20" textAnchor="middle" fill="white" fontFamily="Arial">0/10</text>
                                    </svg>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="border p-2">Opportunity Management </td>
                                    <td className="border p-2"><Tooltip text="Product definition is the business index. It should be used to index the opportunity pipeline, too.">Integrated CRM and Sales in E2E product management </Tooltip></td>
                                    <td className="border p-2"><Tooltip text="Must resist replicating Product Catalog in Salesforce." >Opportunity management disconnected from Product management</Tooltip></td>
                                    <td className="border p-2"><svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0" y="0" width="100" height="40" rx="20" fill="#6082B6" />
                                        <text x="50" y="25" fontSize="20" textAnchor="middle" fill="white" fontFamily="Arial">2/10</text>
                                    </svg>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </section>

            </div >
            <div style={{
                display: "flex",
                justifyContent: "center",
            }}>
                <Image className="justify-center" width="990" height="990" alt="Product Engineering" src='./product-eng.png' unoptimized></Image>
            </div>
            <br></br>
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Product Engineer</h2>

                Who is a Product Engineer? Product + Engineer. They operate at the intersection of business and technology. They are as passionate about the product features and client experience as they are rooted in the scientific method and driven by data. They are experienced and comfortable with the unknown. They apply the same rigour and discipline to everything they do. They always learn, explore and seek new insights. They are comfortable with technology and understand its full impact on the business and on the client experience. They think in systems, frameworks and first principles.

            </div>

            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Example</h2>
                <div className="grid grid-cols-1 gap-6">
                    <div className="p-4 border rounded">
                        <h3 className="text-xl font-bold mb-2">Apply Product Enginnering framework to Payments</h3>
                        <ul className="list-disc pl-4">
                            <li>Model all Payments in Product Catalog</li>
                            <li>Payment Product Family encapsulates any Payment type (FedWire, ACH, RTP, FX and more)</li>
                            <li>Each Payment type has own Configuration, normalized in Product Catalog</li>
                            <li>Each Payment type can be rendered via pre-defined UI snippet (check boxes, radio buttons, dropdowns), low code</li>
                            <li>Adding yet another Payment type will be done in Product Catalog, UIs will auto-generate</li>
                            <li>Default Payment rules, such as number of payment approavers will be automatically provisioned and inherited as needed</li>
                            <br></br>
                            <li>Without the framework and discipline in place, we run a risk of multiple, slow and disconnected product deliveries</li>
                            <li>Without the framework and discipline in place, we run a risk of technology environment lock-in in a single tenant, untransferable implementation</li>



                        </ul>
                    </div>

                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold mb-4">Action - How to make it happen</h2>
                <div className="p-4 border rounded">
                    <ul className="list-disc pl-4">
                        <li>Refine and Adopt Product Engineering Framework</li>
                        <li>Establish Product Engineering role in the organization, responsible for adoption</li>
                        <li>Ex: CoE integrated with all value streams</li>
                        <li>Include Prototyping practice (skunkworks) working ahead of the product roadmap, with focus on innovation</li>
                        <li>Measure EVERYTHING</li>
                    </ul>
                </div>
            </div>
            <br></br><br></br>

            <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Metrics - How would we measure</h2>
                <div className="grid grid-cols-2 gap-6">
                    <div className="border rounded p-4">
                        <h3 className="text-xl font-bold mb-2">Efficiency</h3>
                        <div className="space-y-2">
                            <li>Component reuse rate</li>
                            <li>Automated vs manual changes</li>
                            <li>Self-service adoption</li>
                            <li>Resource utilization</li>
                        </div>
                    </div>
                    <div className="border rounded p-4">
                        <h3 className="text-xl font-bold mb-2">Business Impact</h3>
                        <ul className="list-disc pl-4">
                            <li>Product launch success rate</li>
                            <li>Feature adoption speed</li>
                            <li>Cost per product change</li>
                            <li>Customer satisfaction</li>



                        </ul>
                    </div>
                    <div className="border rounded p-4">
                        <h3 className="text-xl font-bold mb-2">Quality</h3>
                        <ul className="list-disc pl-4">
                            <li>Production incidents</li>
                            <li>Rule execution errors</li>
                            <li>Integration failures</li>
                            <li>System Usability Scale</li>



                        </ul>
                    </div>
                    <div className="border rounded p-4">
                        <h3 className="text-xl font-bold mb-2">Team Performance</h3>
                        <ul className="list-disc pl-4">
                            <li>Knowledge sharing sessions</li>
                            <li>Cross-training coverage</li>
                            <li>Innovation initiatives</li>
                            <li>Certification completion</li>



                        </ul>
                    </div>
                </div>
            </section>

            <br></br><br></br>

            <div className="next buld">
                <h2 className="text-3xl font-bold mb-4">Accelerated Roadmap</h2>
                <div className="space-y-4">
                    <div className="p-4 border rounded">
                        <h3 className="text-xl font-bold">Phase 1: Foundation (now)</h3>
                        <p>Product Catalog, Rules and Events</p>
                    </div>
                    <div className="p-4 border rounded">
                        <h3 className="text-xl font-bold">Phase 2: Multi-product experience (6 months)</h3>
                        <p>Unified Payments and Approvals across multiple products (Wires, BT, ACH, FX …)</p>
                    </div>
                    <div className="p-4 border rounded">
                        <h3 className="text-xl font-bold">Phase 3: Multi-modal experience (9 months)
                        </h3>
                        <p>Low code, multi-modal (Web, API, Agentic UI, Headless) experiences
                        </p>
                    </div>
                    <div className="p-4 border rounded">
                        <h3 className="text-xl font-bold">Phase 4: Curation, Sales and Operations Transformation (10 months)

                        </h3>
                        <p>Opportunity Management to Offer Curation to Enrollment
                        </p>
                    </div>
                    <div className="p-4 border rounded">
                        <h3 className="text-xl font-bold">Phase 5: Multi Tenant (12 months)

                        </h3>
                        <p>Same product, multiple banks.
                        </p>
                    </div>
                </div>
            </div>
            <br></br>


            <div>


            </div>


            <section>
                <Link href="/engineeringHandbook" className="text-blue-500 hover:text-blue-700">
                    Engineering Handbook
                </Link>
            </section>

        </div >




    );
};

export default EngineerignPractice;