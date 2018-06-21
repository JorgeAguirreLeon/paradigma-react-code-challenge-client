import React              from 'react'
import ReactDOM           from 'react-dom'
import { configure }      from 'enzyme'
import Adapter            from 'enzyme-adapter-react-16'
import { shallow }        from 'enzyme'



import Loading            from './Loading'

configure({ adapter: new Adapter() })

test('<Loading /> renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Loading />, div)
  ReactDOM.unmountComponentAtNode(div)
})

test('<Loading /> has the right class name', ()=> {
  const component = shallow(<Loading />)
  expect(component.find('.animated-loading')).toHaveLength(1)

  const classComponent = shallow(<Loading className='testing' />)
  expect(classComponent.find('.animated-loading.testing')).toHaveLength(1)
})

test('<Loading /> has the right properties', ()=> {
  const component = shallow(<Loading color='blue' />)
  expect(component.find('.animated-loading-box').prop('style')).toEqual({borderColor: 'blue'})

  expect(component.find('.animated-loading-inner-box').prop('style')).toEqual({background: 'blue'})
})
