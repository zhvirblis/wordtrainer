import { render, screen } from '../../test-utils';
import Module from './Item';

const module = {
    id: 1,
    name: 'English',
}

test('check name exist', () => {
    render(<Module module={module} setDelModal={() => {}} />);
    expect(screen.getByText(module.name)).toBeInTheDocument();
});