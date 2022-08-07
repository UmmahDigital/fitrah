import React, { FunctionComponent } from 'react';
import Head from 'next/head';

export default function Home(): JSX.Element {
 return (
  <div>
   <Head>
    <title>جيل فطرة</title>
    <meta name="description" content="جيل الفطرة - معًا نعزّز فطرة أطفالنا" />
    <link rel="icon" href="/favicon.png" />
   </Head>

   <header className={`pt-10 text-center border-t-4 border-pink`}>
    <h1 className="text-6xl font-medium	">
     <span className="text-blue">جيل</span>
     <span className="text-pink"> الفطرة</span>
    </h1>
   </header>

   <main className="container mx-auto text-center	mt-10">
    <p className="text-black">
     مبادرة تهدف إلى
     <strong> مساعدة الأهالي على حفظ وتعزيز فطرة أطفالهم</strong> وذلك بتجميع
     ومشاركة مواد تثقيفيّة وترفيهيّة ودينيّة وتعليميّة تناسب الأطفال وتخلو إن
     شاء الله من الانحراف الفطري والخلُقي والفكري والمجتمعي.
    </p>
    <button className="bg-pink text-white py-4 px-10 mt-10 rounded-full text-lg font-medium shadow-md hover:shadow-xl">
     للمساهمة باقتراح مادة
    </button>

    <p className="text-black mt-10">
     سيتم عرض المواد هنا في الموقع عند وصولنا معا إلى 100 مادّة إن شاء الله.
    </p>

    <p className="mt-10">
     <span className="text-pink font-medium text-7xl">42</span>
     <span className="text-blue font-medium text-4xl">/100</span>
     <span className="block">مواد تمّ اقتراحها منذ: اليوم</span>
    </p>

    <p className="mt-10 font-bold">
     كونوا من أوائل المساهمين والمساهات إن شاء الله!
    </p>

    <p className="mt-10 font-medium">
     شاركونا كلّ مفيد من المواد المناسبة للأطفال أو اليافعين أو الأهالي ولنكاتف
     الجهود ولنزرع الأمل بقدر استطاعتنا. ولأن نضيء شمعة واحدة يوما خير من أن
     نكتفي بلعن الظلام كلّ يوم.
    </p>

    <button className="bg-transprent text-blue border border-blue py-2 px-8 mt-10 rounded-full text-md">
     للتطوّع في المشروع
    </button>
   </main>

   <footer className="text-center mt-10"></footer>
  </div>
 );
}
