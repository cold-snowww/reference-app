import './Prompt.scss';

export default function Prompt({ text }) {
   const referenceText = text || (
      <>
         Нажмите на символ <span className="Prompt__sample">i</span> чтобы
         вывести справочную информацию.
      </>
   );
   return <p className="Prompt">{referenceText}</p>;
}
