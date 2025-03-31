import { APP_TITLE } from '@/core/shared/utils';
import { UrlShortenerLogo } from '@/core/ui/components/url-shortener-logo';
import { URL_LIFETIME_IN_MINUTES } from '@/features/short-urls/utils';

export function Hero() {
  return (
    <div>
      <div className="mb-4 h-56">
        <UrlShortenerLogo />
      </div>
      <div className="text-center font-semibold text-text-700">
        <h1 className="sr-only">{APP_TITLE}</h1>
        <p>
          <span className="text-primary-600">Sorvx shot</span> is a shortner for Sorvx team members
        </p>
        <p>
          Since this for members only you can't get started on here, shortened URLs will be active for{' '}
          {URL_LIFETIME_IN_MINUTES} minutes only.
        </p>
      </div>
    </div>
  );
}
