import { packages } from '@/data/packages';

export function BookingSummary() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
      <h2 className="text-2xl mb-4">Popular Orlando packages</h2>
      <div className="space-y-4">
        {packages.map((pkg) => (
          <div key={pkg.id} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
            <h3 className="text-lg">{pkg.name}</h3>
            <p className="text-white/60 text-sm">{pkg.idealFor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
