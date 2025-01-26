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
                    <li>Cross product coordination challenge is excarbated by divergent technology footprints in respective domains</li>
                    <li>Business agility requirements dictate the need for fast, coordinated delivery of cross product initiaves</li>
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
                    <p>Unify product knowledge and engineering excellence in a scalable framework, to accelerate business agility and innovation</p></blockquote>
                <br></br>

                <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 border rounded">
                        <h3 className="text-xl font-bold mb-2">Product Engineering</h3>
                        <ul className="list-disc pl-4">
                            <li>Unified Product Model - enable model driven product delivery x products</li>
                            <li>Standardized Product Rules - improve transparency, simplify compliance</li>
                            <li>Multi-modal experiences (Web, H2H, Agentic) - sticky experiences x products</li>
                            <li>Automated Product Delivery Pipeline - accelerate via low code deployments</li>
                        </ul>
                    </div>
                    <div className="p-4 border rounded">
                        <h3 className="text-xl font-bold mb-2">Product Operations</h3>
                        <ul className="list-disc pl-4">
                            <li>Product Lifecycle Management - what/when/where</li>
                            <li>Opportunity Management enablement - enhanced sales pipeline</li>
                            <li>Offer Curation - curate bespoke offers</li>
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