interface PokemonSelectorProps {
  onSelect: (name: string) => void;
}

const options = ['pikachu', 'charizard', 'gengar', 'squirtle', 'mewtwo'];

export default function PokemonSelector({ onSelect }: PokemonSelectorProps) {
  return (
    <div>
      <label><strong>Pick a Pokémon: </strong></label>
      <select onChange={(e) => onSelect(e.target.value)} defaultValue="">
        <option value="" disabled>-- Select --</option>
        {options.map(name => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>
    </div>
  );
}