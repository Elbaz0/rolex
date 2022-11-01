import React from 'react';
import Footer from './Footer';
import Header from './Header';

const About = () => {
    return (<div>
        <Header />
        <div className='homab'></div>

        <div className='ssa'>
            تحتفي ساعة تشيليني بالأناقة الدائمة التي تستأثر بها الساعات التقليدية ذات الأسلوب المعاصر وتستقي اسمها من اسم فنان عصر النهضة الإيطالي بنفينوتو تشيليني.

            تجمع هذه الساعة بين أفضل مهارات رولكس ومعاييرها العالية في الدِّقة وأسلوبها الذي يُعزِّز إرث صناعة السّاعات من حيث مواكبته لكلّ العصور.  يتميّز إصدار تشيليني بخطوطٍ رصينة ورفيعة ومواد راقية ولمسات فاخرة تُراعي في جميع تفاصيلها رموز فن صناعة الساعات.
        </div>

        <div className='m1'>
        </div>
        {/* <div className='m2'>
        </div> */}
        <div className='m3'>
        </div>


        <Footer />
    </div>)
}

export default About;