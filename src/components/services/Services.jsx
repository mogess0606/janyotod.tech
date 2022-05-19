import React from 'react'

import './services.css'

import {BsFillPatchCheckFill} from 'react-icons/bs'

const Service = () => {
    return (
        <section id='service'>
            <h5> I Offer</h5>
            <h2>Service</h2>
            <div className='container services_container'>
                <article className='service'>
                    <div className='service_head'>
                        <h3>UI Design</h3>
                     </div>
                     <ul className='service_list'>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Lorem ipsum, dolor sit amet</p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Lorem ipsum, dolor sit amet</p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Lorem ipsum, dolor sit amet</p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Lorem ipsum, dolor sit amet</p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Lorem ipsum, dolor sit amet</p>
                            </li>

                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Lorem ipsum, dolor sit amet</p>
                            </li>

                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Lorem ipsum, dolor sit amet</p>
                            </li>
                    </ul>

                        
                        

                   

                </article>
                {/* END OF UI DESIGN */}
                <article className='service'>
                    <div className='service_head'>
                        <h3>Web Development</h3>
                    </div>
                     <ul className='service_list'>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Lorem ipsum, dolor sit amet</p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Lorem ipsum, dolor sit amet</p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Lorem ipsum, dolor sit amet</p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Lorem ipsum, dolor sit amet</p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Lorem ipsum, dolor sit amet</p>
                            </li>

                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Lorem ipsum, dolor sit amet</p>
                            </li>

                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Lorem ipsum, dolor sit amet</p>
                            </li>
                    </ul>

                        
                        

                   

                </article>
                {/* END OF Web Development */}
                <article className='service'>
                    <div className='service_head'>
                        <h3>Content Creation</h3>
                    </div>
                        <ul className='service_list'>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Wordpress </p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Drupal</p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Joomla</p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Moodle</p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Lorem ipsum, dolor sit amet</p>
                            </li>

                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Lorem ipsum, dolor sit amet</p>
                            </li>

                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Lorem ipsum, dolor sit amet</p>
                            </li>
                        </ul>
                </article>
                {/* END OF Content Creation */}
            </div>

        </section>
    )
}

export default Service