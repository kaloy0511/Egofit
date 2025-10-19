import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../styles/Homescreen.css';

const HomescreenTailwind = () => {
  const navigate = useNavigate();
  

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {

      const serviceId = 'service_d65xt4y';
      const templateId = 'template_hc4c3lo';
      const publicKey = 'M3F8lTsSo-1VVHWY5';

      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        message: formData.message,
        to_email: 'egofit@gmail.com',

        user_name: formData.fullName,
        user_email: formData.email,
        user_message: formData.message,
        name: formData.fullName,
        email: formData.email,
        reply_to: formData.email
      };

      console.log('Sending email with data:', templateParams);

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ fullName: '', email: '', message: '' });
      
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <header className="header-nav">
        <div className="section-container">
          <div className="header-container">
            {/* Mobile Back Button */}
            <button 
              onClick={() => navigate(-1)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 mr-3"
              aria-label="Go back"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="header-logo-container">
              <img 
                src="" 
                alt="" 
                className="logo-image"
              />
              <h1 className="logo">EGOFIT</h1>
            </div>
            <nav className="header-nav-links">
              <Link to="/shop" className="nav-link">Shop</Link>
              <a href="#collections" onClick={() => scrollToSection('collections')} className="nav-link">Collections</a>
              <a href="#about" onClick={() => scrollToSection('about')} className="nav-link">About</a>
              <a href="#contact" onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
            </nav>
            <div className="header-icons">
              <button className="header-icon">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="header-icon">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <Link to="/cart" className="header-icon">
                <svg className="w-6 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 3H5M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="section-padding bg-gray-100">
        <div className="section-container">
          <div className="hero-grid">
            <div className="hero-text-container">
              <h2 className="hero-title">ELEVATE YOUR WORKOUT</h2>
              <h3 className="hero-subtitle">ELEVATE YOUR LIFESTYLE</h3>
              <p className="responsive-text-lg mb-8">
                Premium gym clothing designed for performance, comfort, and style. 
                Discover our latest collection of workout gear that moves with you.
              </p>
              <button className="btn-primary" onClick={() => navigate('/shop')}>
                SHOP NOW
              </button>
            </div>
            <div className="hero-image-container">
              <img 
                src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/1c35e358-469a-471f-8e22-bbd7e71be07e/the-best-nike-workout-clothes-for-the-gym.jpg" 
                alt="Workout Hero" 
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="section-padding bg-white">
        <div className="section-container">
          <h2 className="section-title">FEATURED PRODUCTS</h2>
          <div className="products-grid">
            
            <div className="product-card">
              <img 
                src="data:image/jpeg;base64,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" 
                alt="Red T-Shirt" 
                className="product-image"
              />
              <div className="product-content">
                <h3 className="product-title">Men's Red Performance T-Shirt</h3>
                <p className="product-description">Lightweight and breathable, perfect for intense workouts.</p>
                <div className="product-pricing">
                  <span className="product-price">₱550</span>
                  <button className="btn-cart">ADD TO CART</button>
                </div>
              </div>
            </div>

            <div className="product-card">
              <img 
                src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/444967/sub/goods_444967_sub14_3x4.jpg?width=494" 
                alt="Black Hoodie" 
                className="product-image"
              />
              <div className="product-content">
                <h3 className="product-title">Unisex Grey Hoodie</h3>
                <p className="product-description">Cozy and warm hoodie for pre and post workout comfort.</p>
                <div className="product-pricing">
                  <span className="product-price">₱850</span>
                  <button className="btn-cart">ADD TO CART</button>
                </div>
              </div>
            </div>

            <div className="product-card">
              <img 
                src="https://marksandspencer.com.ph/cdn/shop/products/SD_01_T57_8576_Y0_X_EC_90.jpg?v=1582252485" 
                alt="Black Leggings" 
                className="product-image"
              />
              <div className="product-content">
                <h3 className="product-title">Women's Black High-Waist Leggings</h3>
                <p className="product-description">Stretchy and supportive leggings with breathable mesh panels.</p>
                <div className="product-pricing">
                  <span className="product-price">₱1,250</span>
                  <button className="btn-cart">ADD TO CART</button>
                </div>
              </div>
            </div>

            <div className="product-card">
              <img 
                src="https://www.dans.ph/cdn/shop/files/Untitleddesign-2025-02-27T110535.296.png?v=1740626275&width=1445" 
                alt="Black Shorts" 
                className="product-image"
              />
              <div className="product-content">
                <h3 className="product-title">Men's Black Training Shorts</h3>
                <p className="product-description">Comfortable shorts with quick-dry fabric and secure fit.</p>
                <div className="product-pricing">
                  <span className="product-price">₱590</span>
                  <button className="btn-cart">ADD TO CART</button>
                </div>
              </div>
            </div>

            <div className="product-card">
              <img 
                src="data:image/jpeg;base64,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" 
                alt="Sports Bra" 
                className="product-image"
              />
              <div className="product-content">
                <h3 className="product-title">Women's Red Sports Bra</h3>
                <p className="product-description">Supportive and stylish sports bra for high-impact workouts.</p>
                <div className="product-pricing">
                  <span className="product-price">₱790</span>
                  <button className="btn-cart">ADD TO CART</button>
                </div>
              </div>
            </div>

            <div className="product-card">
              <img 
                src="data:image/jpeg;base64,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" 
                alt="Cap" 
                className="product-image"
              />
              <div className="product-content">
                <h3 className="product-title">Unisex Black Gym Cap</h3>
                <p className="product-description">Lightweight cap to keep sweat and sun out of your eyes.</p>
                <div className="product-pricing">
                  <span className="product-price">₱590</span>
                  <button className="btn-cart">ADD TO CART</button>
                </div>
              </div>
            </div>

            <div className="product-card">
              <img 
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEhAVEBAVFQ8PFQ8PDw8PEBUQFREWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDisZFRkrLTcrKy0tKysrNzcrNy0rKysrKysrKysrKysrNysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEDBgcIBQT/xABLEAACAgEBAwcHBwcLAwUAAAAAAQIDBBEFBxIGEyExQVGRIlJhcYGhsRQycoKSosEII1Nis8LDM0Jzg5OjpLLR0/BD0uEVJDRElP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3iAAAAAAAAAAAAAApJpLVvRLpbfQtDHdocu9mUNqzPp4l1xrnz016HGvV6gZGDAbt72y182y6z6GNbH/ADqJ8F2+zBXzcbLl6ebxor326+4DZoNTz3443Zg5H1pUr4SZGG/XF18rCvS/VnRL4yQG2gYlyR3iYO0HwVSlTd2U5KjXOX0GpOM/Unr6DLQAAAAAAAAAAAAAAAAAAAAAAAAAB82fn1UQdl1sKYLrnbOMI+L7QPpPE5U8qcbAr5y+flNPgoho7bGuyMe70vRLXrME5Wb3YRTqwIccur5VbFqtfQrfTJ+mWi9EjUudnWXWO66yVtsmnKyx8Unp2ehdyXQuwD6N43LTKz7VGyTrx9OKOLCb5peU9OLq45eT859/Ql1GK48+7Q9Da+M5pTj0yXRp3x9H/O08aEtH3d6fQwPSVz714B2+l+w+ZSJw6epa+rpILjsfe/d/oU6ZPRNvwL0Md9vR8S9GKXV4lFa48KUV2dOvp7zO+Su9HNxNK7n8toWi4bpNXxX6tvS329Ek/WjBUyaA6T5McvcHO0jXbzdz/wDr36V2690enSf1WzKDkRpGWcnN4ufiaQjb8oqWn5rJ4rUl+rPXij6OlpdwHR4Nd7G3uYdiSvhZjT7Xpz1WvolHyn7YozjZm1KMiPOUXQuh31zjLR9z06n6GB9gAAAAAAAAAAAAAAAB43KblPjYFfOZFmjevBVDyrZtdfDH8XolqtWfRyh2vDEx7MmfTGuOqino5Tb0hFeuTS9pzHt/a1uVdPIunx2TfT5sY/zYRXZFdi/FtgZxyi3vZduscWEcSHVx9F12nfrJcMfVwv1mA5ubbdPnLrZ3WefbOVktO5N9S9C6D5ESTAkSRGIkwEmWZ169aT9ejJACEaIr+avBFyL0/wBChRgVlLUoUKgCupQFAmnoW4slIgq5sv4G07aZqyqyVVi6p1zlCXq1XZ6Oo+WRZbA3xu43mfKZRxMxqOQ9I13pKMLZebJLojN9mnQ+roeiezjj6qfc9H1pptNPvT7DpHdhyoefiJ2PXJpapt6tZdHkWfWXX6VIDMAAAAAAAAAAAAAGtd+OZw41FKenOWym13xrg/xnHwRo63rNu795+XiLuhkv7Uqv+01FZ1gUROMSMOlpF9xAtlqTLky0wAKFQBQqUYFAAwBRso2RbAlqOIttkeIC82W2UcioEosz3c7tl0bRhW3+byIyx5Ls49OOuT9OqcV/SM1+mfbs3MdNld666p13L11zU18AOugUhJNJrpTSafoZUAAAAAAAAAAANPb9f5bG/o7f88TUlzNvb9YfnMV98MheEq/9TUFqAt0W+Wl6dD0bTyIfPj9KPxPXvA+WTLbLki2wKIqEVQAoyRCQFBIEWwKMiVZQCjLOvSy7bM+aMukC7qNSqRTQCqZeq6egsaF6kDrHktlc7h41vn4+PN+t1Rb956hhG57aiu2bXDXWdEp0SXclJyr9nBKPgzNwAAAAAAAAAAA1DvzuTtxodsa7pv1TlBL9mzUF7Ngb2s/nc+zR6quNdCf0VxS+9OS9hru9gfPxeUn3NP3ntXo8K3qZ6uPlKcE+3qfrAjJFplyyxFji1AkSRFIkBUjINlqcwKsSLXOFuV6AvFJPQs8+iPFqAkyxOPaX2W5ID6l1FGhU+gqwIlyDIEogbI3K7b5jO5hv83kxdfo52Cc634ccfXJG/wA5DwMyVNkLofPrnC2PZ5cJKS96OtsPJjbXC2L1hOMLIvvjKKa9zAvAAAAAAAAELrFGMpPqinJ+pLUmefygemLkPuovf93IDmfbOTKybnJ6ym5WSffKbcn72eLcepn9fsXwPLuA+S3qIYj8rTv+JOzqMh5A7H+USzZuPEqNn5ty6Ojnub0rXr+c19ED4I0lebPqjAhYgPncSLJSZECEi1MuzLUgLE0WXA+hopwgWowLiiSUSXCBbaLUujV9ybPoaMk3ZbF+V7Toqa1rhL5TZ3cFOkkn6HPgj9YD194fI35BjbPmo6SlS6chrq+Vau3p72+csSfdUl2IwY6j3ibA+XYF1EVrakrqu/nq/Kil3cXTH1SZy02BJoEVIqmBOLOmN1ObzuysV9sIyx/ZTZKuP3YxOZkb93DZXFs+yD/6eTZFfRlVXPXxlLwA2SAAAAAAAAedyjsUcTIlL5qovb9SrkeiYtvNzOa2be+2arqX17IqX3eIDnrMPJyJHo5Mzx8ifSBbmzdm5vYTjsnMyGvLylfXD01VVzgvvu3wRpSFUpNRiuKcnGEYrrc5PSK8Wjr3YOyYYuLTiR6YVVQp185qOkpP0t6v2gcwwfQQsL0q+BuD64OUH64vR/AtWMo+Wa6SOonIIgtWMtsvWIsyAiyhXQASRUiiQEJm7Pyfdh8FN+fJaO6XMVt/oq35cl6HNtf1RpGxvsWr7EutvsR1tyX2UsTEoxV/0qq6212zUfLl7Zav2geoc173eTnyLPnKMdKMniya+5Tcvz0PZJ8XoVkV2HShiG9Lkx8vwZwhHXIq/wDcUd7sinrX9eLce7VxfYBzC2SiyEScQL0Tcv5PuV0ZlPc8a1fWVkX/AJImmomzdwuXpn21dk8aU/bXbWl7rJeAG+AAAAAAAADWO/TaCjj49GvTO2VrWv8ANrg49PtsXgbONKb/ABvn8fu5menr5zp+CA1dfM+CS6S9KRbA9jkZCL2hhKfzfleL487HhXjodYnIexZ8OTjS83IxZeF0DrwDl7lLU4ZmVDq0yctJfq8/Ph92h5VjZku8CGm0stL9Lr9qEZP4mPzQHw8JUnIiwLVsiy5F+aLMkBRMqURXQCociqKNAepyPxOez8SrrUsnHbX6sbFOX3Ys6yOYN16X/q2Hr+ks8fk9uh0+AAIzkkm31JNv1IDlTl9XCO0sxQSUFkW6JdCT11n97iPCR9Ofl8/bbe1o7bLL2n2O2bm194saASizJ92W0XRtTFnrpGdnyeS71cnXFfblB+xGKtno8m5aZmK11rKw3/iIAdcAAAAAAAAGnN/9PlYk++OTHwlU/wB5m4zWG/mjXGx7PNulX9uqUv4YGiJoiXbEWWUffsGviysaPnZOJHxvgjro5Z3dYvO7UwodnPxt/soyt/hnRHLvaTxtn5N0XwzVbhCS61ZY1XBr1OafsIOf+Uudz+ZkXJ6xndc4tdtam1B/ZUTzLOoRWnQRmyj5p9ZRFJvpKJkCZZmydkizIAVKIqgJIkiCZJMD1+SGVzOfiW9kcnHTf6s7FCX3ZM6tOOrJtLWL0kulNdakup+J13svMV1NV8emNtdVya82cFJfED6jzeUuRzeHk29XBj5Fmv0apP8AA9IxzePZw7LzX3418PtQcfxA5aj/AOPAo2UTCAroe5yIxHbtDDgu3Jxp/VrsVkvuwZ4ZsPchszndpK3TWOPVZbr2Kya5qC9qlY/qgdDAAAAAAAAGCb56eLZrfmW0z8W4fvGdmKb06eLZeQu5Uz+zdBv3Jgcz3ljU+jIPnAz/AHIYqntWEmteaoyLl6G+CrXwtfibT3yT02bNd9uOn7J6/gjB/wAnnG1yMu3zKsetf1k7JP8AZIzLfZeo7N4e2d9EF61xWP3QYGi+IoyyrCrmUWpkWirZFsgjJFuaJyZbsYESpHUagTRJMt8QQEpy1Olt0Wfz2ysbvrU8d+jmrJQj91RftOa3A3R+T3tDWrKxW/mWV5C9VsOBpep0r7QG3TEd7M9Nk5b/AFK17HdBP4mXGEb57OHZGQvOliw8cqrX3Jgc2aFESmUSAlBG/txGyOawp5LXlZFstHpo+Zq1hFfa51/WNC01Sk1CEeKcnGEY+dOT0iva2kdbbC2bHGx6caPzaq66k+/hik3629X7QPuAAAAAAAAPB5eV8Wzstd2PdL7MHL8D3jzeUtXHh5MPOx8iPjVJAco5UT5j68k+QDeP5PNGmLlWdssiNfshRB/vsrv7ytK8Snzp33afQjGK/as9DcLTw7NlLz8m+fhGFf7hi2/jJ1zKKvMo4/7S2S/hgazZRhlGwISZBsrNlpyAqUmiiZOQRaKgaAVKplABdTNhbisvg2lKvXybce2OnfOE65R93H4mukzKN1+Tze1sN69Dssrf16LILX2tBXT5rnfvfw7NjD9Jk0Q+zGdv8M2Mal/KEyNKMSrtldbbp9Crh/igaRaJQiURcQGYbpdk/KNp06rWFKnly6Oj83ooe3nJVv6rOkzUX5P+ztIZWU/5068aPR5keOenr5yH2TboAAAAAAAAAtZUOKEo98ZR8VoXQByHevwPjZv7N3MYU5OUcjJrTevApUSivQuKvXT1tnzQ3HYevTl5TXoeNF+PNsD2dylemyKH508uX+Jsj+BrffXZrtNrzaMePvnL943lsDY1WHjwxaE1VXxcKlJzlrKbnJtvtcpSftNOb5OTmXPOeTVjW3UyqpXHTVO7SceJNNQTa6Enrpp0ga0ZbkyVqcZcEk4TXXCcXGS9afSW2v8AmoEJSIFZxfcyHEBIm30FlyKxkESKlNQUVAKkFEenyWu4M7En3ZWI/Zz8NfdqeYfbsTGstyKoU1ytt5yqUa605S8maevoS06W+hdoV14aL/KBy08vGp16a6J2f21vD/BN6HN2+bL5za10f0UMen+7VnxtYGFIkiJ9WzMJ33VY611usqoTXWucmoa+zXX2AdIbq9m8xsvGi1pKyDyZa9et0nYk/VGUV7DLCFVajFRitIxSikuxJaJEwAAAAAAAAAAAAAAAALGXhVWrhtqhbHzbIRnHwaMcz93OyrVpLBrh/QceN+ycTKgBrbN3L7Pn012ZFHohZXOP34N+88TM3F6/yW0XFd1uKrPerF8DcgA0Lkbjc1fMy8af04W1fBSPinuX2ouqWJL6N9q+NSOhwBzqtzu1e7H/AP0P/bLq3M7U6+LE9XP26/sjoUAc+w3L7T7Z4i/r7v8AZPvxtyGU/wCUzKa/6Ou2748BvMAav2PuTwq2pZF9uU+2EdMapv1Q1n982BsbYeNiR4MbHroi+vm4KLk++UuuT9LbPQAAx3lLyIwM98eRjp26Jc9XKdVui6k5Ra4ku6WqMiAGo9o7jaX/APHzrK/RfVXevVrBw/E+jkZuknh5leXblwujU5yjXCiUOKbhKKbbk9EuLX1pG1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k=" 
                alt="Long Sleeve" 
                className="product-image"
              />
              <div className="product-content">
                <h3 className="product-title">Men's Compression Sleeves</h3>
                <p className="product-description">Enhance circulation and reduce muscle fatigue during workouts.</p>
                <div className="product-pricing">
                  <span className="product-price">₱1,250</span>
                  <button className="btn-cart">ADD TO CART</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="collections" className="section-padding bg-gray-50">
        <div className="section-container">
          <h2 className="section-title">OUR COLLECTIONS</h2>
          <div className="collections-grid">
            
            <div className="collection-card">
              <img 
                src="https://www.archroma.com/uploads/images/PERFORMANCE-ACTIVEWEAR_shutterstock_2360726391.jpg" 
                alt="Performance Wear" 
                className="collection-image"
              />
              <div className="collection-content">
                <h3 className="collection-title">Performance Wear</h3>
                <p className="collection-description">Designed for maximum breathability and sweat-wicking to keep you cool and dry.</p>
                <button className="collection-btn">
                  EXPLORE PERFORMANCE WEAR →
                </button>
              </div>
            </div>

            <div className="collection-card">
              <img 
                src="https://cdn.prod.website-files.com/63ff7c6ecc83f9ec7ffe916b/67cb3c8b5c6496328f29ef29_72d97bb4.webp" 
                alt="Athleisure" 
                className="collection-image"
              />
              <div className="collection-content">
                <h3 className="collection-title">Athleisure</h3>
                <p className="collection-description">Stylish and comfortable gym clothes that transition seamlessly from gym to street.</p>
                <button className="collection-btn">
                  EXPLORE ATHLEISURE →
                </button>
              </div>
            </div>

            <div className="collection-card">
              <img 
                src="https://www.hindustantimes.com/ht-img/img/2024/12/26/550x309/Gym_equipment_1735194792062_1735194794537.jpg" 
                alt="Accessories" 
                className="collection-image"
              />
              <div className="collection-content">
                <h3 className="collection-title">Accessories</h3>
                <p className="collection-description">Essential accessories to complement your workout gear and enhance performance.</p>
                <button className="collection-btn">
                  EXPLORE ACCESSORIES →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="section-container">
          <div className="hero-grid">
            <div className="about-image-container">
              <img 
                src="https://steelsupplements.com/cdn/shop/articles/shutterstock_1204167769_4907x.jpg?v=1604683440" 
                alt="About EGOFIT" 
                className="hero-image"
              />
            </div>
            <div className="about-text-container">
              <h2 className="about-title">ABOUT EGOFIT</h2>
              <p className="responsive-text-lg mb-6">
                We're passionate about creating premium workout clothing that 
                empowers athletes and fitness enthusiasts to perform at their best. 
                Our gear is designed with cutting-edge materials and innovative 
                construction techniques to provide maximum comfort, durability, 
                and style.
              </p>
              <p className="responsive-text-lg">
                From high-performance activewear to essential training accessories, 
                every piece in our collection is crafted to help you elevate your 
                workout and express your personal style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="contact-container">
          <h2 className="section-title">GET IN TOUCH</h2>
          <div className="contact-form">
            <form className="form-container" onSubmit={handleSubmit}>
              <div>
                <input 
                  type="text" 
                  name="fullName"
                  placeholder="Full Name" 
                  className="form-input"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  className="form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  placeholder="Message" 
                  rows="4"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  Failed to send message. Please try again or contact us directly.
                </div>
              )}
              
              <button 
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col items-center space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">+63 9388010229</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">Egofit@gmail.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900 text-center">123 Fitness Ave, Paranaque City, Metro Manila Philippines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">EGOFIT</span>
            </div>
            <div className="text-center">
              <p className="text-gray-700 text-sm font-medium">© 2025 EGOFIT. ALL RIGHTS RESERVED.</p>
            </div>
            <div className="flex items-center space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-600 transition duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-600 transition duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-600 transition duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default HomescreenTailwind;