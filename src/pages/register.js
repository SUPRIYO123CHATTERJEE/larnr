
export default function Register() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-mycolor fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="https://larnr.com">
                        <img src="/images/logo-dark.png" class="logo-img" alt="" />

                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item ">
                                <a class="nav-link hover-nav" href="/">Main</a>
                            </li>

                            <li class="nav-item ">
                                <a class="nav-link hover-nav" href="/courses">Courses</a>
                            </li>
                        </ul>

                        <ul class="navbar-nav mr-end">
                            {/* <!-- Authentication Links --> */}
                            <li class="nav-item ">
                                <a class="nav-link hover-nav" href="/login">Login</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link hover-nav" href="/signup">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}
            <div class="contents page-height">
                <div class="bg-dark">
                    <div class="contents container page-height">
                        <div class="row justify-content-center align-items-md-center">
                            <div class="col-md-7 text-center d-n-none d-md-block">


                                <h5 class="text-warning">Do you finding a good opportunity?</h5>
                                <h2 class="text-light">Quick Join Now.</h2>
                                <h6>Never Loose the opportunities.</h6>
                            </div>
                            <div class="col-md-4 bg-light block">
                                <form method="POST" action="https://app.larnr.com/signup">
                                    <input type="hidden" name="_token" value="PGd0IxUS3qCm9K7i3KI0rjd1eDI1wBu4oUMSQvxh"/>
                                        <div id="my_name_nkU9UYpeHGZi1lwE_wrap" style={{ display: "none" }}>
                                            <input name="my_name_nkU9UYpeHGZi1lwE" type="text" value="" id="my_name_nkU9UYpeHGZi1lwE"/>
                                                <input name="valid_from" type="text" value="eyJpdiI6Inl4RlhVQlV2SFlIV0I0TDdOd3FBakE9PSIsInZhbHVlIjoiNEp1UGg2NkNxa2hhZi9CM0RDcENZdz09IiwibWFjIjoiYzRhMDM0OTJjZTU5MDc2OGZiYjgwZWRhYjIyYWNkODBjNjRlN2U1ZjlhMDNhZThmNGNhZjZkZDBhNjdhMWE0MCJ9"/>
                                                </div>
                                                <div id="_g-recaptcha"></div>
                                                <div class="g-recaptcha" data-sitekey="6LdfNpgaAAAAAFcl7dHnLS0zSvKbSEjdWOyR5kDe" data-size="invisible" data-callback="_submitForm" data-badge="bottomright"></div>
                                                <div class="row p-2">
                                                    <div class="col text-center">
                                                        <h2>Signup Now</h2>
                                                    </div>
                                                </div>
                                                <div class="row p-2">
                                                    <div class="col-3">
                                                        <label>Email<span class="text-danger">*</span></label>
                                                    </div>
                                                    <div class="col-9">
                                                        <input type="email" class="form-control" name="email" required />
                                                    </div>
                                                </div>
                                                <div class="row p-2">
                                                    <div class="col-3">
                                                        <label>Password<span class="text-danger">*</span></label>
                                                    </div>
                                                    <div class="col-9">
                                                        <input type="password" class="form-control" name="password" required />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col pt-2">
                                                        <h5 class="text-center m-0">User Details</h5>
                                                    </div>
                                                </div>
                                                <div class="row p-2">
                                                    <div class="col">
                                                        <label>First Name<span class="text-danger">*</span></label>
                                                        <input type="text" class="form-control" name="fname" required />
                                                    </div>
                                                    <div class="col">
                                                        <label>Last Name<span class="text-danger">*</span></label>
                                                        <input type="text" class="form-control" name="lname" required />
                                                    </div>
                                                </div>
                                                <div class="row p-2">
                                                    <div class="col">
                                                        <label><i class="fa fa-mobile" aria-hidden="true"></i> Mobile Number<span class="text-danger">*</span></label>
                                                        <input type="number" class="form-control" name="mobile" required />
                                                    </div>
                                                    <div class="col">
                                                        <label><i class="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp</label>
                                                        <input type="text" class="form-control" name="whatsapp" />
                                                    </div>
                                                </div>
                                                <div class="row p-2">
                                                    <div class="col">
                                                        <label><i class="fa fa-address-book" aria-hidden="true"></i> Address</label>
                                                        <input type="text" class="form-control" name="address" />
                                                    </div>
                                                </div>
                                                <div class="row p-2">
                                                    <div class="col">
                                                        <label>City<span class="text-danger">*</span></label>
                                                        <select class="form-control" name="city" required>
                                                            <option value="">Choose your city</option>
                                                            <option>Kolkata</option>
                                                            <option>Mumbai</option>
                                                            <option>Delhi</option>
                                                            <option>Bengalore</option>
                                                            <option>Other</option>
                                                        </select>
                                                    </div>
                                                    <div class="col">
                                                        <label>Pincode<span class="text-danger">*</span></label>
                                                        <input type="text" class="form-control" name="pincode" required />
                                                    </div>
                                                </div>
                                                <div class="row p-2">
                                                    <div class="col">
                                                        <label>State<span class="text-danger">*</span></label>
                                                        <select class="form-control" name="state" required>
                                                            <option value="">Choose your State</option>
                                                            <option>West Bengal</option>
                                                            <option>Andhra Pradesh</option>
                                                            <option>Arunachal Pradesh</option>
                                                            <option>Assam</option>
                                                            <option>Bihar</option>
                                                            <option>Chhattisgarh</option>
                                                            <option>Goa</option>
                                                            <option>Gujarat</option>
                                                            <option>Haryana</option>
                                                            <option>Himachal Pradesh</option>
                                                            <option>Jharkhand</option>
                                                            <option>Karnataka</option>
                                                            <option>Kerala</option>
                                                            <option>Madhya Pradesh</option>
                                                            <option>Maharashtra</option>
                                                            <option>Manipur</option>
                                                            <option>Meghalaya</option>
                                                            <option>Mizoram</option>
                                                            <option>Nagaland</option>
                                                            <option>Odisha</option>
                                                            <option>Punjab</option>
                                                            <option>Rajasthan</option>
                                                            <option>Sikkim</option>
                                                            <option>Tamil Nadu</option>
                                                            <option>Telangana</option>
                                                            <option>Tripura</option>
                                                            <option>Uttar Pradesh</option>
                                                            <option>Uttarakhand</option>
                                                            <option>Andaman and Nicobar Islands</option>
                                                            <option>Other</option>
                                                        </select>
                                                    </div>
                                                    <div class="col">
                                                        <label>Country<span class="text-danger">*</span></label>
                                                        <select class="form-control" name="country" required>
                                                            <option value="">Choose your Country</option>
                                                            <option value="India">India</option>
                                                            <option value="Afghanistan">Afghanistan</option>
                                                            <option value="Albania">Albania</option>
                                                            <option value="Algeria">Algeria</option>
                                                            <option value="Andorra">Andorra</option>
                                                            <option value="Angola">Angola</option>
                                                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                            <option value="Argentina">Argentina</option>
                                                            <option value="Armenia">Armenia</option>
                                                            <option value="Australia">Australia</option>
                                                            <option value="Austria">Austria</option>
                                                            <option value="Austrian Empire">Austrian Empire</option>
                                                            <option value="Azerbaijan">Azerbaijan</option>
                                                            <option value="Baden">Baden</option>
                                                            <option value="Bahamas">Bahamas</option>
                                                            <option value="Bahrain">Bahrain</option>
                                                            <option value="Bangladesh">Bangladesh</option>
                                                            <option value="Barbados">Barbados</option>
                                                            <option value="Bavaria">Bavaria</option>
                                                            <option value="Belarus">Belarus</option>
                                                            <option value="Belgium">Belgium</option>
                                                            <option value="Belize">Belize</option>
                                                            <option value="Benin (Dahomey)">Benin (Dahomey)</option>
                                                            <option value="Bolivia">Bolivia</option>
                                                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                            <option value="Botswana">Botswana</option>
                                                            <option value="Brazil">Brazil</option>
                                                            <option value="Brunei">Brunei</option>
                                                            <option value="Brunswick and Lüneburg">Brunswick and Lüneburg</option>
                                                            <option value="Bulgaria">Bulgaria</option>
                                                            <option value="Burkina Faso (Upper Volta)">Burkina Faso (Upper Volta)</option>
                                                            <option value="Burma">Burma</option>
                                                            <option value="Burundi">Burundi</option>
                                                            <option value="Cabo Verde">Cabo Verde</option>
                                                            <option value="Cambodia">Cambodia</option>
                                                            <option value="Cameroon">Cameroon</option>
                                                            <option value="Canada">Canada</option>
                                                            <option value="Cayman Islands">Cayman Islands</option>
                                                            <option value="Central African Republic">Central African Republic</option>
                                                            <option value="Central American Federation">Central American Federation</option>
                                                            <option value="Chad">Chad</option>
                                                            <option value="Chile">Chile</option>
                                                            <option value="China">China</option>
                                                            <option value="Colombia">Colombia</option>
                                                            <option value="Comoros">Comoros</option>
                                                            <option value="Congo Free State">Congo Free State</option>
                                                            <option value="Costa Rica">Costa Rica</option>
                                                            <option value="Cote d’Ivoire (Ivory Coast)">Cote d’Ivoire (Ivory Coast)</option>
                                                            <option value="Croatia">Croatia</option>
                                                            <option value="Cuba">Cuba</option>
                                                            <option value="Cyprus">Cyprus</option>
                                                            <option value="Czechia">Czechia</option>
                                                            <option value="Czechoslovakia">Czechoslovakia</option>
                                                            <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                                                            <option value="Denmark">Denmark</option>
                                                            <option value="Djibouti">Djibouti</option>
                                                            <option value="Dominica">Dominica</option>
                                                            <option value="Dominican Republic">Dominican Republic</option>
                                                            <option value="Duchy of Parma">Duchy of Parma</option>
                                                            <option value="East Germany (German Democratic Republic)">East Germany (German Democratic Republic)</option>
                                                            <option value="Ecuador">Ecuador</option>
                                                            <option value="Egypt">Egypt</option>
                                                            <option value="El Salvador">El Salvador</option>
                                                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                            <option value="Eritrea">Eritrea</option>
                                                            <option value="Estonia">Estonia</option>
                                                            <option value="Eswatini">Eswatini</option>
                                                            <option value="Ethiopia">Ethiopia</option>
                                                            <option value="Federal Government of Germany">Federal Government of Germany</option>
                                                            <option value="Fiji">Fiji</option>
                                                            <option value="Finland">Finland</option>
                                                            <option value="France">France</option>
                                                            <option value="Gabon">Gabon</option>
                                                            <option value="Gambia">Gambia</option>
                                                            <option value="Georgia">Georgia</option>
                                                            <option value="Germany">Germany</option>
                                                            <option value="Ghana">Ghana</option>
                                                            <option value="Grand Duchy of Tuscany">Grand Duchy of Tuscany</option>
                                                            <option value="Greece">Greece</option>
                                                            <option value="Grenada">Grenada</option>
                                                            <option value="Guatemala">Guatemala</option>
                                                            <option value="Guinea">Guinea</option>
                                                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                            <option value="Guyana">Guyana</option>
                                                            <option value="Haiti">Haiti</option>
                                                            <option value="Hanover">Hanover</option>
                                                            <option value="Hanseatic Republics">Hanseatic Republics</option>
                                                            <option value="Hawaii">Hawaii</option>
                                                            <option value="Hesse">Hesse</option>
                                                            <option value="Holy See">Holy See</option>
                                                            <option value="Honduras">Honduras</option>
                                                            <option value="Hungary">Hungary</option>
                                                            <option value="Iceland">Iceland</option>
                                                            <option value="Indonesia">Indonesia</option>
                                                            <option value="Iran">Iran</option>
                                                            <option value="Iraq">Iraq</option>
                                                            <option value="Ireland">Ireland</option>
                                                            <option value="Israel">Israel</option>
                                                            <option value="Italy">Italy</option>
                                                            <option value="Jamaica">Jamaica</option>
                                                            <option value="Japan">Japan</option>
                                                            <option value="Jordan">Jordan</option>
                                                            <option value="Kazakhstan">Kazakhstan</option>
                                                            <option value="Kenya">Kenya</option>
                                                            <option value="Kingdom of Serbia/Yugoslavia">Kingdom of Serbia/Yugoslavia</option>
                                                            <option value="Kiribati">Kiribati</option>
                                                            <option value="Korea">Korea</option>
                                                            <option value="Kosovo">Kosovo</option>
                                                            <option value="Kuwait">Kuwait</option>
                                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                            <option value="Laos">Laos</option>
                                                            <option value="Latvia">Latvia</option>
                                                            <option value="Lebanon">Lebanon</option>
                                                            <option value="Lesotho">Lesotho</option>
                                                            <option value="Lew Chew (Loochoo)">Lew Chew (Loochoo)</option>
                                                            <option value="Liberia">Liberia</option>
                                                            <option value="Libya">Libya</option>
                                                            <option value="Liechtenstein">Liechtenstein</option>
                                                            <option value="Lithuania">Lithuania</option>
                                                            <option value="Luxembourg">Luxembourg</option>
                                                            <option value="Madagascar">Madagascar</option>
                                                            <option value="Malawi">Malawi</option>
                                                            <option value="Malaysia">Malaysia</option>
                                                            <option value="Maldives">Maldives</option>
                                                            <option value="Mali">Mali</option>
                                                            <option value="Malta">Malta</option>
                                                            <option value="Marshall Islands">Marshall Islands</option>
                                                            <option value="Mauritania">Mauritania</option>
                                                            <option value="Mauritius">Mauritius</option>
                                                            <option value="Mecklenburg-Schwerin">Mecklenburg-Schwerin</option>
                                                            <option value="Mecklenburg-Strelitz">Mecklenburg-Strelitz</option>
                                                            <option value="Mexico">Mexico</option>
                                                            <option value="Micronesia">Micronesia</option>
                                                            <option value="Moldova">Moldova</option>
                                                            <option value="Monaco">Monaco</option>
                                                            <option value="Mongolia">Mongolia</option>
                                                            <option value="Montenegro">Montenegro</option>
                                                            <option value="Morocco">Morocco</option>
                                                            <option value="Mozambique">Mozambique</option>
                                                            <option value="Namibia">Namibia</option>
                                                            <option value="Nassau">Nassau</option>
                                                            <option value="Nauru">Nauru</option>
                                                            <option value="Nepal">Nepal</option>
                                                            <option value="Netherlands">Netherlands</option>
                                                            <option value="New Zealand">New Zealand</option>
                                                            <option value="Nicaragua">Nicaragua</option>
                                                            <option value="Niger">Niger</option>
                                                            <option value="Nigeria">Nigeria</option>
                                                            <option value="North German Confederation">North German Confederation</option>
                                                            <option value="North German Union">North German Union</option>
                                                            <option value="North Macedonia">North Macedonia</option>
                                                            <option value="Norway">Norway</option>
                                                            <option value="Oldenburg">Oldenburg</option>
                                                            <option value="Oman">Oman</option>
                                                            <option value="Orange Free State">Orange Free State</option>
                                                            <option value="Pakistan">Pakistan</option>
                                                            <option value="Palau">Palau</option>
                                                            <option value="Panama">Panama</option>
                                                            <option value="Papal States">Papal States</option>
                                                            <option value="Papua New Guinea">Papua New Guinea</option>
                                                            <option value="Paraguay">Paraguay</option>
                                                            <option value="Peru">Peru</option>
                                                            <option value="Philippines">Philippines</option>
                                                            <option value="Piedmont-Sardinia">Piedmont-Sardinia</option>
                                                            <option value="Poland">Poland</option>
                                                            <option value="Portugal">Portugal</option>
                                                            <option value="Qatar">Qatar</option>
                                                            <option value="Republic of Genoa">Republic of Genoa</option>
                                                            <option value="Republic of Korea (South Korea)">Republic of Korea (South Korea)</option>
                                                            <option value="Republic of the Congo">Republic of the Congo</option>
                                                            <option value="Romania">Romania</option>
                                                            <option value="Russia">Russia</option>
                                                            <option value="Rwanda">Rwanda</option>
                                                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                            <option value="Saint Lucia">Saint Lucia</option>
                                                            <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                                            <option value="Samoa">Samoa</option>
                                                            <option value="San Marino">San Marino</option>
                                                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                            <option value="Saudi Arabia">Saudi Arabia</option>
                                                            <option value="Schaumburg-Lippe">Schaumburg-Lippe</option>
                                                            <option value="Senegal">Senegal</option>
                                                            <option value="Serbia">Serbia</option>
                                                            <option value="Seychelles">Seychelles</option>
                                                            <option value="Sierra Leone">Sierra Leone</option>
                                                            <option value="Singapore">Singapore</option>
                                                            <option value="Slovakia">Slovakia</option>
                                                            <option value="Slovenia">Slovenia</option>
                                                            <option value="Solomon Islands">Solomon Islands</option>
                                                            <option value="Somalia">Somalia</option>
                                                            <option value="South Africa">South Africa</option>
                                                            <option value="South Sudan">South Sudan</option>
                                                            <option value="Spain">Spain</option>
                                                            <option value="Sri Lanka">Sri Lanka</option>
                                                            <option value="Sudan">Sudan</option>
                                                            <option value="Suriname">Suriname</option>
                                                            <option value="Sweden">Sweden</option>
                                                            <option value="Switzerland">Switzerland</option>
                                                            <option value="Syria">Syria</option>
                                                            <option value="Tajikistan">Tajikistan</option>
                                                            <option value="Tanzania">Tanzania</option>
                                                            <option value="Texas">Texas</option>
                                                            <option value="Thailand">Thailand</option>
                                                            <option value="Timor-Leste">Timor-Leste</option>
                                                            <option value="Togo">Togo</option>
                                                            <option value="Tonga">Tonga</option>
                                                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                            <option value="Tunisia">Tunisia</option>
                                                            <option value="Turkey">Turkey</option>
                                                            <option value="Turkmenistan">Turkmenistan</option>
                                                            <option value="Tuvalu">Tuvalu</option>
                                                            <option value="Two Sicilies">Two Sicilies</option>
                                                            <option value="Uganda">Uganda</option>
                                                            <option value="Ukraine">Ukraine</option>
                                                            <option value="Union of Soviet Socialist Republics">Union of Soviet Socialist Republics</option>
                                                            <option value="United Arab Emirates">United Arab Emirates</option>
                                                            <option value="United Kingdom">United Kingdom</option>
                                                            <option value="United Republic of Tanzania">United Republic of Tanzania</option>
                                                            <option value="United States of America">United States of America</option>
                                                            <option value="Uruguay">Uruguay</option>
                                                            <option value="Uzbekistan">Uzbekistan</option>
                                                            <option value="Vanuatu">Vanuatu</option>
                                                            <option value="Venezuela">Venezuela</option>
                                                            <option value="Vietnam">Vietnam</option>
                                                            <option value="Württemberg">Württemberg</option>
                                                            <option value="Yemen">Yemen</option>
                                                            <option value="Zambia">Zambia</option>
                                                            <option value="Zimbabwe">Zimbabwe</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="row p-2">
                                                    <div class="col text-center">
                                                        <button type="submit" class="btn btn-success btn-block">
                                                            <i class="fa fa-sign-in"></i>
                                                            Sign Up
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        {/* <!-- Copyright By --> */}
                        <div class="container-fluid">
                            <div class="row p-3 m-0">
                                <div class="col-md text-center text-md-left">
                                    <p class="text-dark">SDLearn v1.0.0</p>
                                </div>
                                <div class="col-md text-center">
                                    <p class="text-dark">
                                        &copy; Copyright By <a class="text-info" href="/">Larnr.com</a>.
                                        2022
                                    </p>
                                </div>
                                <div class="col-md text-center text-md-right">
                                    <p class="text-dark">Developed By <a class="text-info" href="https://www.medust.com">Medust Technology Pvt Ltd.</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Copyright By --> */}

                    </div>
                </>

                )
}