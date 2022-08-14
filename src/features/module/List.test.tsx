import { render, screen } from '../../test-utils';
import ModuleComponent from './Component';

const module = {
    id: 1,
    name: 'English',
}

test('check name exist', () => {
    render(<ModuleComponent module={module} setDelModal={() => {}} />);
    expect(screen.getByText(module.name)).toBeInTheDocument();
});