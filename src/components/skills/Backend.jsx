import nodeIcon from '../../images/node-icon.png';
import phpIcon from '../../images/php-icon.png';
import pythonIcon from '../../images/python-icon.png';
import sqlIcon from '../../images/sql-icon.png';
import javaIcon from '../../images/java-icon.png';

export const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Backend Developer</h3>
    <div className="skills__box">
        <div className="skills__group">

            <div className="skills__data">
                <img src={nodeIcon} alt="" className="icon2" />
                <div>
                    <h3 className="skills__name">Node JS</h3>
                </div>
            </div>

            <div className="skills__data">
                <img src={phpIcon} alt="" className="icon2" />
                <div>
                    <h3 className="skills__name">PHP</h3>
                </div>
            </div>

            <div className="skills__data">
                <img src={pythonIcon} alt="" className="icon2" />
                <div>
                    <h3 className="skills__name">Python</h3>
                </div>
            </div>

            <div className="skills__data">
                <img src={javaIcon} alt="" className="icon2" />
                <div>
                    <h3 className="skills__name">Java</h3>
                </div>
            </div>

            <div className="skills__data">
                <img src={sqlIcon} alt="" className="skills__img" />

                <div>
                    <h3 className="skills__name">SQL</h3>
                </div>

            </div>

        </div>
    </div>
</div>
  )
}
