import htmlIcon from '../../images/html-icon.png';
import cssIcon from '../../images/css-icon.png';
import jsIcon from '../../images/js-icon.png';
import reactIcon from '../../images/react-icon.png';
import bootstrapIcon from '../../images/bootstrap-icon.png';
import gitIcon from '../../images/git-icon.png';

export const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend Developer</h3>
        <div className="skills__box">
            <div className="skills__group">

                <div className="skills__data">
                    <img className='icon2' src={htmlIcon} alt="" />
                    <div>
                        <h3 className="skills__name">HTML</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <img className='icon2' src={cssIcon} alt="" />
                    <div>
                        <h3 className="skills__name">CSS</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <img className='icon2' src={jsIcon} alt="" />
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <img className='icon2' src={reactIcon} alt="" />
                    <div>
                        <h3 className="skills__name">React</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <img className='icon2' src={bootstrapIcon} alt="" />
                    <div>
                        <h3 className="skills__name">Bootstrap</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <img className='icon2' src={gitIcon} alt="" />
                    <div>
                        <h3 className="skills__name">Git</h3>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
