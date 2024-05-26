import { Accordion, AccordionItem } from '@szhsin/react-accordion';

export default function Accodions() {
  return (
    <Accordion className='p-[50px]'>
      <AccordionItem className={'bg-white w-[75%] mx-auto p-[30px] leading-[30px]  rounded-lg'} header="EVOS, qayerda joylashgansiz?">
      EVOS O'zbekiston Respublikasi bo'ylab 62 ta filialiga ega. <br/> Siz uyingiz yoki ofisingiz yaqinida joylashgan filiallardan birini topishingiz mumkin.  
      </AccordionItem>

      <AccordionItem className={'bg-white w-[75%] mx-auto p-[30px] leading-[30px] mt-[20px] rounded-lg'} header="EVOS, kechasi yetkazib berish xizmatidan foydalansam bo’ladimi?">
      EVOS O'zbekiston Respublikasi bo'ylab 62 ta filialiga ega. <br/> Siz uyingiz yoki ofisingiz yaqinida joylashgan filiallardan birini topishingiz mumkin.  
      </AccordionItem>

      <AccordionItem className={'bg-white w-[75%] mx-auto p-[30px] leading-[30px] mt-[20px] rounded-lg'} header="EVOS, sizda chegirmalar bo’lib turadimi?">
      EVOS O'zbekiston Respublikasi bo'ylab 62 ta filialiga ega. <br/> Siz uyingiz yoki ofisingiz yaqinida joylashgan filiallardan birini topishingiz mumkin.  
      </AccordionItem>

      <AccordionItem className={'bg-white w-[75%] mx-auto p-[30px] leading-[30px] mt-[20px] rounded-lg'} header={`EVOS, men ovqatlarning kaloriyasiga qattiq e’tibor beraman. Oziq-ovqatlaringi juda ham yuqorimi? Menga biror  olasizmi?`}>
      EVOS O'zbekiston Respublikasi bo'ylab 62 ta filialiga ega. <br/> Siz uyingiz yoki ofisingiz yaqinida joylashgan filiallardan birini topishingiz mumkin.  
      </AccordionItem>

      <AccordionItem className={'bg-white w-[75%] mx-auto p-[30px] leading-[30px] mt-[20px] rounded-lg'} header="Men sizlarga ishga kirmoqchi edim.">
      EVOS O'zbekiston Respublikasi bo'ylab 62 ta filialiga ega. <br/> Siz uyingiz yoki ofisingiz yaqinida joylashgan filiallardan birini topishingiz mumkin.  
      </AccordionItem>

      <AccordionItem className={'bg-white w-[75%] mx-auto p-[30px] leading-[30px] mt-[20px] rounded-lg'} header="Yaqinda men sizning restoranlaringizdan birida edim / yetkazib berish xizmatidan foydalandim.  Siz davom edati hamisha bundan foyda qiziqarli g'oyalarim bor (menyu, dizayn, xodimlarning ishi va boshqalar).  Ular haqida sizga qanday qilib ayta olaman?">
      EVOS O'zbekiston Respublikasi bo'ylab 62 ta filialiga ega. <br/> Siz uyingiz yoki ofisingiz yaqinida joylashgan filiallardan birini topishingiz mumkin.  
      </AccordionItem>

    </Accordion>
  );
}