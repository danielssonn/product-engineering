import Link from "next/link";
import Image from "next/image";
const EngineerignPractice = () => {



    return (
        <div className=" p-8">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">Product Engineering Practice</h1>
                <p className="text-xl">Transforming Product Delivery Through Engineering Excellence</p>
            </div>


            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Background</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Product teams are organized in discrete value streams, such as Liquidity, Payments or Digital Experience</li>
                    <li>Specialized subject matter expertise and market operational experience exists in respective product organizations</li>
                    <li>Business agility requirements dictate the need for faster, coordinated delivery of cross product initiaves</li>
                    <li>Cross product coordination challenge is excarbated by divergent technology footprints in respective domains</li>
                    <li>We need a systemic approach to deal with the agility challenge, while maintaining the current strenghts</li>


                </ul>
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
                            <li>Struggles describing requirments in consistent and pragmatic fashion</li>
                            <li>Observe the churn in Jira artifacts almost till solution deployment</li>

                        </ul>
                    </div>
                    <div className="p-4 border rounded">
                        <h3 className="text-xl font-bold mb-2">Technology</h3>
                        <ul className="list-disc pl-4">
                            <li>Aids requirement discovery deep into delivery/test cycles</li>
                            <li>Struggles building reusable assets</li>
                            <li>Struggles in efficiency and quality</li>


                        </ul>
                    </div>
                </div>
            </div>
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Product Engineering Vision</h2>
                <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
                    <p>Connect product knowledge with engineering best practice in a scalable framework, to accelerate business agility and innovation</p></blockquote>
                <br></br>
                <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">

                    <rect x="50" y="50" width="200" height="200"
                        fill="darkblue" stroke="darkblue" strokeWidth="2" />
                    <text fill="white" x="150" y="150" textAnchor="middle" dominant-baseline="middle">
                        Product
                    </text>


                    <rect x="350" y="50" width="200" height="200"
                        fill="darkblue" stroke="darkblue" strokeWidth="2" />
                    <text fill="white" x="450" y="150" textAnchor="middle" dominant-baseline="middle">
                        Technology
                    </text>


                    <rect x="200" y="150" width="200" height="200"
                        fill="white" stroke="green" strokeWidth="10" />
                    <text x="300" y="250" textAnchor="middle" dominant-baseline="middle">
                        Product Engineering
                    </text>
                    <line x1="250" y1="150" x2="350" y2="150"
                        stroke="red" stroke-width="2" strokeDasharray="15" />
                    <text fill="red" x="300" y="140" textAnchor="middle" dominant-baseline="auto">
                        Chasm
                    </text>

                    <rect x="220" y="190" width="70" height="30"
                        fill="green" stroke="green" stroke-width="1" />
                    <text fill="white" x="255" y="205" textAnchor="middle" dominant-baseline="middle" fontSize="8">
                        Product Catalog
                    </text>

                    <rect x="310" y="190" width="70" height="30"
                        fill="green" stroke="green" stroke-width="1" />
                    <text fill="white" x="345" y="205" textAnchor="middle" dominant-baseline="middle" fontSize="8">
                        Product Rules
                    </text>

                    <rect x="220" y="290" width="70" height="30"
                        fill="green" stroke="green" stroke-width="1" />
                    <text fill="white" x="255" y="305" textAnchor="middle" dominant-baseline="middle" fontSize="8">
                        Product Experience
                    </text>

                    <rect x="310" y="290" width="70" height="30"
                        fill="green" stroke="green" stroke-width="1" />
                    <text fill="white" x="345" y="305" textAnchor="middle" dominant-baseline="middle" fontSize="8">
                        Product Events
                    </text>

                </svg>


                <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 border rounded">
                        <h3 className="text-xl font-bold mb-2">Product Engineering</h3>
                        <ul className="list-disc pl-4">
                            <li>Unified Product Model - enable reusable, model driven delivery x products</li>
                            <li>Standardized Product Rules - improve transparency, simplify compliance</li>
                            <li>Multi-modal experiences (Web, H2H, Agentic) - create sticky experiences x products</li>
                            <li>Automated Product Delivery Pipeline - accelerate via low code deployments</li>
                        </ul>
                    </div>
                    <div className="p-4 border rounded">
                        <h3 className="text-xl font-bold mb-2">Product Operations</h3>
                        <ul className="list-disc pl-4">
                            <li>Product Lifecycle Management - what/when/where of all products</li>
                            <li>Opportunity Management enablement - enhanced sales pipeline with integrated visibility</li>
                            <li>Offer Curation - create and extend bespoke offers and bundles</li>
                            <li>Adoption Monitoring - connected feedback loop</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Image width="800" height="800" alt="Product Engineering" src='/product-eng.png'></Image>
            <br></br>
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Product Engineer</h2>
                Who is a Product Engineer? Product + Engineer. They operate at the intersection of business and technology. They are as passionate about the product features and client experience as they are rooted in the scientific method and driven by data. They are experienced and comfortable with the unknown. They apply the same rigour and discipline to everything they do. They always learn, explore and seek new insights. They are comfortable with technology and understand its full impact on the business and on the client experience. They think in systems, frameworks and first principles.
            </div>
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Expected Benefits</h2>
                <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 border rounded">
                        <h3 className="text-xl font-bold mb-2">Business Impact</h3>
                        <ul className="list-disc pl-4">
                            <li>50% faster time-to-market</li>
                            <li>30% reduction in costs</li>
                            <li>Accelerated Innovation in product offering</li>
                        </ul>
                    </div>
                    <div className="p-4 border rounded">
                        <h3 className="text-xl font-bold mb-2">Technical Impact</h3>
                        <ul className="list-disc pl-4">
                            <li>Reusable product components</li>
                            <li>Standardized product delivery pipeline</li>
                            <li>Reduced product technical debt</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">In Action</h2>
                <div className="grid grid-cols-1 gap-6">
                    <div className="p-4 border rounded">
                        <h3 className="text-xl font-bold mb-2">Payments</h3>
                        <ul className="list-disc pl-4">
                            <li>Payment Product Family encapsulates any Payment type (FedWire, ACH, RTP, FX ...)</li>
                            <li>Each Payment type has own Configuration, normalized in Product Catalog</li>
                            <li>Each Payment type can be rendered via pre-defined UI snippet (check boxes, radio buttons, dropdowns), normalized in Product Catalog</li>
                            <li>Adding new Payment type will be done by augmenting the Product Model, UI will auto-generate</li>
                            <li>Default Payment rules, such as number of approavers will be automatically provisioned</li>
                        </ul>
                    </div>

                </div>
            </div>
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
            <div>
                <h2 className="text-3xl font-bold mb-4">Requirements</h2>
                <div className="p-4 border rounded">
                    <ul className="list-disc pl-4">
                        <li>Product Engineering Platform</li>
                        <li>Product Engineering Team </li>
                        <li>Product Enfineering CoE integrated with all value streams</li>
                        <li>Prototyping practice (skunkworks) working ahead of the product roadmap, with focus on innovation</li>
                        <li>Executive sponsorship</li>
                    </ul>
                </div>
            </div>
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